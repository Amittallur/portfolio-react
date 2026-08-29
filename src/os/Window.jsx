import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const isTrafficLight = (event) => event.target.closest('.mac-light')

const Window = ({ app, z, onFocus, onClose, onMinimize, children }) => {
  const drag = useRef(null)
  const node = useRef(null)
  const [max, setMax] = useState(false)

  useEffect(() => {
    const el = node.current
    if (!el || max) return undefined
    el.style.left = `${app.x}px`
    el.style.top = `${app.y}px`
    return undefined
  }, [app.x, app.y, max])

  const onTitlePointerDown = (event) => {
    if (event.button !== 0 || max || isTrafficLight(event)) return
    event.preventDefault()
    onFocus(app.id)
    const el = node.current
    const startX = event.clientX
    const startY = event.clientY
    const origX = el.offsetLeft
    const origY = el.offsetTop
    drag.current = { startX, startY, origX, origY }

    const move = (moveEvent) => {
      if (!drag.current) return
      const x = drag.current.origX + (moveEvent.clientX - drag.current.startX)
      const y = Math.max(28, drag.current.origY + (moveEvent.clientY - drag.current.startY))
      el.style.left = `${Math.max(8, x)}px`
      el.style.top = `${y}px`
    }
    const up = () => {
      drag.current = null
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
  }

  const stopLight = (event) => {
    event.stopPropagation()
  }

  return (
    <motion.article
      ref={node}
      className={`mac-window ${max ? 'is-max' : ''}`}
      style={{ zIndex: z, width: max ? undefined : app.w }}
      onPointerDown={() => onFocus(app.id)}
      initial={{ opacity: 0, scale: 0.92, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 28 }}
      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
    >
      <header
        className="mac-titlebar"
        onPointerDown={onTitlePointerDown}
        onDoubleClick={(event) => {
          if (isTrafficLight(event)) return
          setMax((v) => !v)
        }}
      >
        <span className="mac-lights" onPointerDown={stopLight} onDoubleClick={stopLight}>
          <button
            type="button"
            className="mac-light close"
            aria-label="Close"
            onPointerDown={stopLight}
            onClick={(event) => {
              event.stopPropagation()
              onClose(app.id)
            }}
          />
          <button
            type="button"
            className="mac-light min"
            aria-label="Minimize"
            onPointerDown={stopLight}
            onClick={(event) => {
              event.stopPropagation()
              onMinimize(app.id)
            }}
          />
          <button
            type="button"
            className="mac-light max"
            aria-label="Zoom"
            onPointerDown={stopLight}
            onClick={(event) => {
              event.stopPropagation()
              setMax((v) => !v)
            }}
          />
        </span>
        <span className="mac-title">{app.label ?? app.title}</span>
        <span />
      </header>
      <div className="mac-window-body">{children}</div>
    </motion.article>
  )
}

export default Window
