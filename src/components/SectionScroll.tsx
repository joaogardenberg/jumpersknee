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
  height: 100dvh;
  overflow: hidden;
  width: 100dvw;
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

  const firstSection = useMemo(
    () => () => {
      if (cooldown) return

      setSection(0)
      setUpdate(!update)
      setCooldown(true)
    },
    [cooldown, update],
  )

  const lastSection = useMemo(
    () => () => {
      if (cooldown) return

      const sections = Math.ceil(
        (scrollRef.current as HTMLElement).scrollHeight /
          (scrollRef.current as HTMLElement).clientHeight,
      )

      setSection(sections - 1)
      setUpdate(!update)
      setCooldown(true)
    },
    [cooldown, update],
  )

  const { ref, onMouseDown } = useSwipeable({
    onSwipedUp: () => nextSection(),
    onSwipedLeft: () => nextSection(),
    onSwipedDown: () => prevSection(),
    onSwipedRight: () => prevSection(),
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
      if (
        [
          'ArrowUp',
          'ArrowDown',
          'ArrowLeft',
          'ArrowRight',
          'PageUp',
          'PageDown',
          'Home',
          'End',
        ].includes(e.key)
      ) {
        e.preventDefault()

        if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(e.key)) {
          prevSection()
        } else if (['ArrowDown', 'ArrowRight', 'PageDown'].includes(e.key)) {
          nextSection()
        } else if (e.key === 'Home') {
          firstSection()
        } else if (e.key === 'End') {
          lastSection()
        }

        return false
      }
    }

    const onResize = () => setUpdate((prev) => !prev)

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('keydown', onKeyDown, false)
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [prevSection, nextSection, firstSection, lastSection])

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
