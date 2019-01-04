document.addEventListener('DOMContentLoaded', () => {

	const catImages = [
	  "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495636.svg",
	  "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495625.svg",
	  "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495622.svg",
	  "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495619.svg",
	  "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495616.svg",
	  "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495613.svg",
	  "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495592.svg",
	  "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495579.svg",
	  "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/336916.svg"
	]

	function getSlider(images, id) {

		let indexOfSlide = 0;

		document.querySelector(id).addEventListener('click', (e) => {
			const target = e.target;

			if (target.matches('.next-slide')) {
				goNextSlide();
			}
			if (target.matches('.previous-slide')) {
				goPreviousSlide();
			}
			if (target.matches('img')) {
				goNextSlide();
			}
		});


		function goPreviousSlide() { 
			if (indexOfSlide <= 0) {
				indexOfSlide = images.length -1;
			} else indexOfSlide -= 1

			return document.querySelector(id).querySelector('.img').setAttribute('src', images[indexOfSlide])
		}

		function goNextSlide() { 
			if (indexOfSlide >= images.length - 1) {
				indexOfSlide = 0;
			} else indexOfSlide += 1

			return document.querySelector(id).querySelector('.img').setAttribute('src', images[indexOfSlide])
		}
	}

	const slider = getSlider(catImages, '#slider-1');

});









