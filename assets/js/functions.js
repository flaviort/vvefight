const body = document.body
const select = (e) => document.querySelector(e)
const selectAll = (e) => document.querySelectorAll(e)
const selectId = (id) => document.getElementById(id)
const vh = (coef) => window.innerHeight * (coef/100)
const vw = (coef) => window.innerWidth * (coef/100)

// check if the user is on a mobile device
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// init the image trail effect
function imageTrail() {
	if (!isMobile()) {

		const MathUtils = {
			lerp: (a, b, n) => (1 - n) * a + n * b,
			distance: (x1,y1,x2,y2) => Math.hypot(x2-x1, y2-y1)
		}

		const getMousePos = (ev) => {
			let posx = 0;
			let posy = 0;
			if (!ev) ev = selectId('middle').event;
			if (ev.pageX || ev.pageY) {
				posx = ev.pageX;
				posy = ev.pageY;
			}
			else if (ev.clientX || ev.clientY) 	{
				posx = ev.clientX + selectId('middle').scrollLeft + docEl.scrollLeft;
				posy = ev.clientY + selectId('middle').scrollTop + docEl.scrollTop;
			}
			return {x: posx, y: posy};
		}

		let mousePos = lastMousePos = cacheMousePos = {x: 0, y: 0};

		window.addEventListener('mousemove', ev => mousePos = getMousePos(ev));

		const getMouseDistance = () => MathUtils.distance(mousePos.x,mousePos.y,lastMousePos.x,lastMousePos.y);

		class Image {
			constructor(el) {
				this.DOM = {el: el};
				this.defaultStyle = {
					x: 0,
					y: 0,
					opacity: 0
				};
				this.getRect();
				this.initEvents();
			}
			initEvents() {
				window.addEventListener('resize', () => this.resize());
			}
			resize() {
				gsap.set(this.DOM.el, this.defaultStyle);
				this.getRect();
			}
			getRect() {
				this.rect = this.DOM.el.getBoundingClientRect();
			}
			isActive() {
				return gsap.isTweening(this.DOM.el) || this.DOM.el.style.opacity != 0;
			}
		}

		class ImageTrail {
			constructor() {
				this.DOM = {content: document.querySelector('.trail')};
				this.images = [];
				[...this.DOM.content.querySelectorAll('img')].forEach(img => this.images.push(new Image(img)));
				this.imagesTotal = this.images.length;
				this.imgPosition = 0;
				this.zIndexVal = 1;
				this.threshold = 200;
				requestAnimationFrame(() => this.render());
			}
			render() {
				let distance = getMouseDistance();
				cacheMousePos.x = MathUtils.lerp(cacheMousePos.x || mousePos.x, mousePos.x, 0.1);
				cacheMousePos.y = MathUtils.lerp(cacheMousePos.y || mousePos.y, mousePos.y, 0.1);

				if ( distance > this.threshold ) {
					this.showNextImage();

					++this.zIndexVal;
					this.imgPosition = this.imgPosition < this.imagesTotal-1 ? this.imgPosition+1 : 0;
					
					lastMousePos = mousePos;
				}

				let isIdle = true;
				for (let img of this.images) {
					if ( img.isActive() ) {
						isIdle = false;
						break;
					}
				}
				if ( isIdle && this.zIndexVal !== 1 ) {
					this.zIndexVal = 1;
				}

				requestAnimationFrame(() => this.render());
			}
			showNextImage() {
				const img = this.images[this.imgPosition];
				gsap.killTweensOf(img.DOM.el);

				new TimelineMax()
				
				.set(img.DOM.el, {
					startAt: {opacity: 0},
					opacity: 1,
					y: 0,
					scale: 1,
					zIndex: this.zIndexVal,
					x: cacheMousePos.x - img.rect.width/2,
					y: cacheMousePos.y - img.rect.height/2
				}, 0)

				.to(img.DOM.el, 1.8, {
					ease: Expo.easeOut,
					x: mousePos.x - img.rect.width/2,
					y: mousePos.y - img.rect.height/2
				}, 0)

				.to(img.DOM.el, 0.8, {
					ease: Power1.easeOut,
					opacity: 0
				}, 0.8)
				
				.to(img.DOM.el, 0.8, {
					ease: Quint.easeInOut,
					scale: 0,
					y: '+=200'
				}, 0.8);
			}
		}

		new ImageTrail();

	} else {
		select('.move').remove()
	}
}

// disable console warnings and show skyline message
function initCopyright() {
	const message = ' Proudly presented by VVe fight ⭐⭐⭐ www.vvefight.com '
	const style = 'color: #f8f8f8; font-size: 12px; font-weight: bold; background-color: #0d0e13; padding: 8px'
	console.log(`%c${message}`, style)
}

// fire all scripts on page load
function initScript() {
	initCopyright()
	imageTrail()
}

initScript()