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
  const ref = useRef<HTMLElement>(null)
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
        (ref.current as HTMLElement).scrollHeight /
          (ref.current as HTMLElement).clientHeight,
      )

      setSection((prev) => Math.min(sections, prev + 1))
      setUpdate((prev) => !prev)
    },
    [ref, setSection, setUpdate],
  )

  const handlers = useSwipeable({
    onSwipedUp: () => {
      nextSection()
      console.log('Swiped up')
    },
    onSwipedDown: () => {
      prevSection()
      console.log('Swiped down')
    },
    preventScrollOnSwipe: true,
    touchEventOptions: { passive: false },
    trackMouse: true,
  })

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
    window.addEventListener('touchmove', (e) => e.preventDefault(), {
      passive: false,
    })

    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKeyDown)
      // window.removeEventListener('touchmove', console.log)
    }
  }, [prevSection, nextSection])

  useEffect(() => {
    ref.current?.scrollTo({
      top: section * ref.current.clientHeight,
      behavior: 'smooth',
    })
  }, [ref, section, update])

  return (
    <StyledSectionScroll {...handlers} ref={ref}>
      {children}
    </StyledSectionScroll>
  )
}
