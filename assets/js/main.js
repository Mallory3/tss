/*
	Zenith by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

(function($) {

	var	$window		= $(window),
		$header		= $('#header'),
		$banner		= $('#banner'),
		$body		= $('body'),
		settings	= {
			banner: {

				// Indicators (= the clickable dots at the bottom).
					indicators: true,

				// Transition speed (in ms)
				// For timing purposes only. It *must* match the transition speed of "#banner > article".
					speed: 1000,

				// Transition delay (in ms)
					delay: 4000

			}
		};

	/**
	 * Custom banner slider for Zenith.
	 * @return {jQuery} jQuery object.
	 */
		$.fn._slider = function(options) {

			var	$window = $(window),
				$this = $(this);

			if (this.length == 0)
				return $this;

			if (this.length > 1) {

				for (var i=0; i < this.length; i++)
					$(this[i])._slider(options);

				return $this;

			}

			// Vars.
				var	current = 0, pos = 0, lastPos = 0,
					slides = [], indicators = [],
					$indicators,
					$slides = $this.children('article'),
					intervalId,
					isLocked = false,
					i = 0;

			// Turn off indicators if we only have one slide.
				if ($slides.length == 1)
					options.indicators = false;

			// Functions.
				$this._switchTo = function(x, stop) {

					if (isLocked || pos == x)
						return;

					isLocked = true;

					if (stop)
						window.clearInterval(intervalId);

					// Update positions.
						lastPos = pos;
						pos = x;

					// Hide last slide.
						slides[lastPos].removeClass('top');

						if (options.indicators)
							indicators[lastPos].removeClass('visible');

					// Show new slide.
						slides[pos].addClass('visible').addClass('top');

						if (options.indicators)
							indicators[pos].addClass('visible');

					// Finish hiding last slide after a short delay.
						window.setTimeout(function() {

							slides[lastPos].addClass('instant').removeClass('visible');

							window.setTimeout(function() {

								slides[lastPos].removeClass('instant');
								isLocked = false;

							}, 100);

						}, options.speed);

				};

			// Indicators.
				if (options.indicators)
					$indicators = $('<ul class="indicators"></ul>').appendTo($this);

			// Slides.
				$slides
					.each(function() {

						var $slide = $(this),
							$img = $slide.find('img');

						// Slide.
							$slide
								.css('background-image', 'url("' + $img.attr('src') + '")')
								.css('background-position', ($slide.data('position') ? $slide.data('position') : 'center'));

						// Add to slides.
							slides.push($slide);

						// Indicators.
							if (options.indicators) {

								var $indicator_li = $('<li>' + i + '</li>').appendTo($indicators);

								// Indicator.
									$indicator_li
										.data('index', i)
										.on('click', function() {
											$this._switchTo($(this).data('index'), true);
										});

								// Add to indicators.
									indicators.push($indicator_li);

							}

						i++;

					});

			// Initial slide.
				slides[pos].addClass('visible').addClass('top');

				if (options.indicators)
					indicators[pos].addClass('visible');

			// Bail if we only have a single slide.
				if (slides.length == 1)
					return;

			// Main loop.
				intervalId = window.setInterval(function() {

					current++;

					if (current >= slides.length)
						current = 0;

					$this._switchTo(current);

				}, options.delay);

		};

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Slider.
		$banner._slider(settings.banner);

	// Dropdowns.
		$('#nav > ul')
			.dropotron({
				//alignment: 'left',
				hideDelay: 350
			});

	// Menu.
		$('<a href="#navPanel" class="navPanelToggle"><span class="label">Menu</span></a>')
			.appendTo($header);

		$('<div id="navPanel">' + '<nav>' + $('#nav').navList() + '</nav>' + '<a href="#navPanel" class="close"></a>' + '</div>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right'
			});
			
// Gallery
			// $(function() {
                  
			// 	$('.lazy').lazy({
			// 		// your configuration goes here
			// 		scrollDirection: 'vertical',
			// 		effect: 'fadeIn',
			// 		visibleOnly: true
			// 	});
						
			// 	});
			
				$(window).on('load', (function() {
			
			$(".allFilter").show();
			$(".straightFilter").hide();
			$(".circularFilter").hide();
			$(".otherFilter").hide();
			$(".deckFilter").hide();
			$("#galleryTitle").html("Our Work")
			
			$("#filterSelect").change(function(){
			if( $(this).val() == "All" ) { 
			$(".allFilter").show();
			$(".straightFilter").hide();
			$(".circularFilter").hide();
			$(".otherFilter").hide();
			$(".deckFilter").hide()
			$("#galleryTitle").html("Our Work")
			}
			
			else if ( $(this).val() == "Straight Stairs" ) { 
			$(".allFilter").hide();
			$(".straightFilter").show();
			$(".circularFilter").hide();
			$(".otherFilter").hide();
			$(".deckFilter").hide()
			$("#galleryTitle").html("Straight Stairs")
			}
			else if( $(this).val() == "Circular Stairs" ) { 
			$(".allFilter").hide();
			$(".straightFilter").hide();
			$(".circularFilter").show();
			$(".otherFilter").hide();
			$(".deckFilter").hide()
			$("#galleryTitle").html("Circular Stairs")
			}
			else if( $(this).val() == "Outdoor Stairs" ) { 
			$(".allFilter").hide();
			$(".straightFilter").hide();
			$(".circularFilter").hide();
			$(".otherFilter").hide();
			$(".deckFilter").show()
			$("#galleryTitle").html("Outdoor Stairs")
			}
			else if( $(this).val() == "Spindles, Posts & Rails" ) { 
			$(".allFilter").hide();
			$(".straightFilter").hide();
			$(".circularFilter").hide();
			$(".otherFilter").show();
			$(".deckFilter").hide()
			$("#galleryTitle").html("Spindles, Posts & Rails")
			}
			
			}); 
			
			})
				);
				

})(jQuery);