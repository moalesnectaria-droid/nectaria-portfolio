import Particles from "react-tsparticles"

function Stars() {
  return (

    <Particles

      options={{

        background: {
          color: {
            value: "#000000"
          }
        },

        fpsLimit: 60,

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            }
          },

          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.4
              }
            }
          }
        },

        particles: {

          color: {
            value: ["#a855f7", "#3b82f6", "#ffffff"]
          },

          links: {
            color: "#a855f7",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1
          },

          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce"
            },
            random: false,
            speed: 1,
            straight: false
          },

          number: {
            density: {
              enable: true
            },
            value: 70
          },

          opacity: {
            value: 0.4
          },

          shape: {
            type: "circle"
          },

          size: {
            value: { min: 1, max: 4 }
          }

        },

        detectRetina: true

      }}

      className="absolute inset-0 -z-10"

    />

  )
}

export default Stars