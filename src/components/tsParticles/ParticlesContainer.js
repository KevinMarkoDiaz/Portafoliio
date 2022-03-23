import Particles from "react-tsparticles";

export const ParticlesContainer = () => {
  const particlesInit = (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={
        {
          "background": {
         
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
          },
          "fullScreen": {
            "zIndex": 1
          },
          "detectRetina": false,
          "interactivity": {
            "events": {
              "onClick": {
                "mode": "push"
              },
              "onDiv": {
                "selectors": "#repulse-div",
                "mode": "repulse"
              },
              "onHover": {
                "enable": true,
                "mode": "bubble"
              }
            },
            "modes": {
              "bubble": {
                "distance": 40,
                "duration": 2,
                "opacity": 2,
                "size": 4
              },
              "grab": {
                "distance": 400
              },
              "slow": {
                "factor": 1,
                "radius": 0
              }
            }
          },
          "particles": {
            "color": {
              "value": "fff"
            },
            "links": {
              "color": {
                "value": "rgb(0, 212, 250)"
              },
              "distance": 50,
              "enable": true,
              "opacity": 0.2
            },
            "move": {
              "attract": {
                "rotate": {
                  "x": 600,
                  "y": 1200
                }
              },
              "enable": true,
              "outModes": {
                "default": "bounce",
                "bottom": "bounce",
                "left": "bounce",
                "right": "bounce",
                "top": "bounce"
              },
              "speed": 1
            },
            "number": {
              "density": {
                "area": 10
              },
              "value": 200
            },
            "opacity": {
              "value": {
                "min": 0.05,
                "max": 0.4
              },
              "animation": {
                "enable": true,
                "minimumValue": 0.02
              }
            },
            "size": {
              "random": {
                "enable": true
              },
              "value": 1,
              "animation": {
                "speed": 10,
                "minimumValue": 0.1
              }
            }
          },
          "polygon": {
            "draw": {
              "enable": true,
              "stroke": {
                "color": {
                  "value": "rgba(0, 212, 250,0.4)"
                },
                "width": 0.8,
                "opacity": 0.2
              }
            },
            "enable": true,
            "inline": {
              "arrangement": "equidistant"
            },
            "move": {
              "radius": 40,
              "type": "path"
            },
            "scale": 0.8,
            "type": "inline",
            "url": "https://particles.js.org/images/smalldeer.svg"
          }
        }
        }
    />
  );
};