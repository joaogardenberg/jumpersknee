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
  const myRef = useRef<HTMLElement>(null)
  const [section, setSection] = useState(0)
  const [update, setUpdate] = useState(false)

  const prevSection = useMemo(
    () => () => {
      setSection((prev) => Math.max(0, prev - 1))
      setUpdate((prev) => !prev)
    },
    [setSection, setUpdate],
  )

  const nextSection = useMemo(
    () => () => {
      const sections = Math.ceil(
        (myRef.current as HTMLElement).scrollHeight /
          (myRef.current as HTMLElement).clientHeight,
      )

      setSection((prev) => Math.min(sections, prev + 1))
      setUpdate((prev) => !prev)
    },
    [myRef, setSection, setUpdate],
  )

  const { ref, onMouseDown } = useSwipeable({
    onSwipedUp: () => nextSection(),
    onSwipedDown: () => prevSection(),
    preventScrollOnSwipe: true,
    touchEventOptions: { passive: false },
    trackMouse: true,
  })

  const mergedRefs = (element: HTMLElement | null) => {
    myRef.current = element
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
    myRef.current?.scrollTo({
      top: section * myRef.current.clientHeight,
      behavior: 'smooth',
    })
  }, [myRef, section, update])

  return (
    <StyledSectionScroll onMouseDown={onMouseDown} ref={mergedRefs}>
      {children}
    </StyledSectionScroll>
  )
}
