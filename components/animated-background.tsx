'use client'

import { useCallback } from 'react'
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

const AnimatedBackground = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine)
  }, [])

  return (
    <div className="fixed inset-0 z-0">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"></div>
      
      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 400
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "circle"
            },
            opacity: {
              value: 0.1,
              random: true
            },
            size: {
              value: 30,
              random: true
            },
            move: {
              enable: true,
              speed: 40,
              direction: "none",
              random: true,
              straight: true,
              out_mode: "out",
              bounce: false,
            },
            links: {
              enable: true,
              distance: 100,
              color: "#ffffff",
              opacity: 0.3,
              width: 1
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1
                }
              },
              push: {
                particles_nb: 4
              }
            }
          },
          retina_detect: true,
          background: {
            color: "transparent",
          }
        }}
      />

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-x"></div>
    </div>
  )
}

export default AnimatedBackground 