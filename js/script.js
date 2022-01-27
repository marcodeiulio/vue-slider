console.log('JS OK');

Vue.config.devtools = true

const app = new Vue({
	el: '#root',
	data: {
		currentImage: 0,
		images: [
			'images/image1.jpg',
			'images/image2.jpg',
			'images/image3.jpg',
			'images/image4.jpg',
		]
	},
	methods: {
		nextImage() {
			this.currentImage === this.images.length - 1 ? this.currentImage = 0 : this.currentImage++;
		},
		prevImage() {
			this.currentImage === 0 ? this.currentImage = this.images.length - 1 : this.currentImage--;
		},
	}
})