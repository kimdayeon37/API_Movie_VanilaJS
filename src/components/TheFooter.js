import { Component } from '../core/heropy'

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: 'footer'
    })
}
render() {
    this.el.innerHTML =/* html */`
    <div>
        <a href="https://github.com/kimdayeon37/API_Movie_VanilaJS">
            Github Repository
        </a>
        <a href="https://github.com/kimdayeon37">
         ${new Date().getFullYear()} DaYeon
    </div>`
}
}