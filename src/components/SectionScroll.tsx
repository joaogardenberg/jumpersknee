import { useEffect, useRef, useState, type PropsWithChildren } from 'react'
import { useSwipeable } from 'react-swipeable'
import styled from 'styled-components'

const KEYS = [37, 38, 39, 40]

const preventDefault = (e: Event) => e.preventDefault()

const preventDefaultForScrollKeys = (e: KeyboardEvent) => {
  if (KEYS.indexOf(e.keyCode)) {
    preventDefault(e)
    return false
  }
}

let supportsPassive = false

try {
  window.addEventListener(
    'test',
    () => {},
    Object.defineProperty({}, 'passive', { get: () => (supportsPassive = true) })
  )
} catch (e) {}

const wheelOpt = supportsPassive ? { passive: false } : false
const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'

const StyledSectionScroll = styled.main`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100vw;
`

export default function useSectionScroll({ children }: PropsWithChildren) {
  const ref = useRef<HTMLElement>(null)
  const [section, setSection] = useState(0)
  const [update, setUpdate] = useState(false)

  const handlers = useSwipeable({
    preventScrollOnSwipe: true,
    trackMouse: true,
    touchEventOptions: { passive: false },
    onSwiped: console.log,
  })

  // useEffect(() => {
  //   window.addEventListener('DOMMouseScroll', preventDefault, false)
  //   window.addEventListener(wheelEvent, preventDefault, wheelOpt)
  //   window.addEventListener('touchmove', preventDefault, wheelOpt)
  //   window.addEventListener('keydown', preventDefaultForScrollKeys, false)

  //   return () => {
  //     window.removeEventListener('DOMMouseScroll', preventDefault, false)
  //     window.removeEventListener(wheelEvent, preventDefault)
  //     window.removeEventListener('touchmove', preventDefault)
  //     window.removeEventListener('keydown', preventDefaultForScrollKeys, false)
  //   }
  // }, [])

  useEffect(() => {
    const onScrollEnd = ({ target }: Event) => {
      const scrollY = (target as HTMLElement).scrollTop
      const innerHeight = (target as HTMLElement).clientHeight
      const currentSection = Math.floor(scrollY / innerHeight)
      const currentScroll = scrollY % innerHeight

      if (currentScroll > innerHeight / 2) {
        setSection(currentSection + 1)
        setUpdate((_update) => !_update)
      } else {
        setSection(currentSection)
        setUpdate((_update) => !_update)
      }
    }

    ref.current?.addEventListener('scrollend', onScrollEnd)
    return () => ref.current?.removeEventListener('scrollend', onScrollEnd)
  }, [ref])

  useEffect(() => {
    ref.current?.scrollTo({ top: section * ref.current.clientHeight, behavior: 'smooth' })
  }, [ref, section, update])

  return <StyledSectionScroll {...handlers}>{children}</StyledSectionScroll>
}
