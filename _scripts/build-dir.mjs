import { Arch, build, Platform } from 'electron-builder'
import config from './ebuilder.config.mjs'

// Unpacked Linux build only. We replace /opt/FreeTube wholesale, so the
// installers (deb/rpm/pacman/AppImage) buy nothing and cost minutes.
const targets = Platform.LINUX.createTarget(['dir'], Arch.x64)
const output = await build({ targets, config, publish: 'never' })
console.log(output)
