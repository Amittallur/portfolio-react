import { addCollection, Icon } from '@iconify/react'
import fluentColor from './fluent-color-dock.json'

addCollection(fluentColor)

const glyphs = {
  launchpad: 'fluent-color:apps-48',
  finder: 'fluent-color:document-folder-24',
  work: 'fluent-color:briefcase-48',
  about: 'fluent-color:person-48',
  craft: 'fluent-color:code-block-48',
  mail: 'fluent-color:mail-48',
  term: 'fluent-color:laptop-48',
  era: 'fluent-color:globe-shield-48',
}

export const MacIcon = ({ name, size, fill }) => (
  <span
    className={`mac-icon${fill ? ' is-fill' : ''}`}
    style={size ? { width: size, height: size } : undefined}
  >
    <Icon icon={glyphs[name] ?? glyphs.era} />
  </span>
)
