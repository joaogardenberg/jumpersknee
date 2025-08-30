import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type PropsWithChildren,
} from 'react'
import { useSwipeable } from 'react-swipeable'
import styled from 'styled-components'

const StyledSectionScroll = styled.main`
  height: 100vh;
  overflow: auto;
  width: 100vw;
`

export default function useSectionScroll({ children }: PropsWithChildren) {
  const scrollRef = useRef<HTMLElement>(null)
  const [section, setSection] = useState(0)
  const [update, setUpdate] = useState(false)
  const [cooldown, setCooldown] = useState(false)

  const prevSection = useMemo(
    () => () => {
      if (cooldown) return

      const newSection = section - 1

      if (newSection < 0) return

      setSection(newSection)
      setUpdate(!update)
      setCooldown(true)
    },
    [cooldown, section, update],
  )

  const nextSection = useMemo(
    () => () => {
      if (cooldown) return

      const sections = Math.ceil(
        (scrollRef.current as HTMLElement).scrollHeight /
          (scrollRef.current as HTMLElement).clientHeight,
      )

      const newSection = section + 1

      if (newSection >= sections) return

      setSection(newSection)
      setUpdate(!update)
      setCooldown(true)
    },
    [cooldown, scrollRef, section, update],
  )

  const { ref, onMouseDown } = useSwipeable({
    onSwipedUp: () => nextSection(),
    onSwipedDown: () => prevSection(),
    preventScrollOnSwipe: true,
    touchEventOptions: { passive: false },
    trackMouse: true,
  })

  const mergedRefs = (element: HTMLElement | null) => {
    scrollRef.current = element
    ref(element)
  }

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()

      if (e.deltaY < 0) {
        prevSection()
      } else {
        nextSection()
      }
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault()

        if (e.key === 'ArrowUp') {
          prevSection()
        } else if (e.key === 'ArrowDown') {
          nextSection()
        }

        return false
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('keydown', onKeyDown, false)

    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [prevSection, nextSection])

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: section * scrollRef.current.clientHeight,
      behavior: 'smooth',
    })
  }, [scrollRef, section, update])

  useEffect(() => {
    if (!cooldown) return
    const timeout = setTimeout(() => setCooldown(false), 500)
    return () => clearTimeout(timeout)
  }, [cooldown])

  return (
    <StyledSectionScroll onMouseDown={onMouseDown} ref={mergedRefs}>
      {children}
    </StyledSectionScroll>
  )
}
