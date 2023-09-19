import { BaseScreen } from '@/core/component/base-screen.component'
import template from './home.template.html'
import RenderService from '@/core/services/render.service'
import styles from './home.module.scss'

export class Home extends BaseScreen {
	constructor () {
		super({ title: 'Home' })
	}

	render () {
		const element = RenderService.htmlToElement(template, [], styles)
		return element.outerHTML
	}
}
