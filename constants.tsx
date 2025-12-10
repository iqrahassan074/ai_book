import React from 'react';
import { Chapter, BlogPost } from './types';

// In a real backend scenario, these would be fetched from an API.
// We use JSX for rich content representation here.

export const CHAPTERS: Chapter[] = [
  {
    id: '1',
    title: '1. Introduction to Humanoids',
    slug: 'intro',
    content: (
      <div className="space-y-6">
        <p className="lead text-xl text-gray-600 dark:text-gray-400">
          The dream of creating machines in our own image is as old as humanity itself. 
          From the golems of myth to the clockwork automatons of the Renaissance, 
          we have always sought to replicate the human form.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">What defines a Humanoid?</h2>
        <p>
          A humanoid robot is a robot with its body shape built to resemble the human body. 
          The design may be for functional purposes, such as interacting with human tools 
          and environments, for experimental purposes, such as the study of bipedal locomotion, 
          or for other purposes.
        </p>
        <img 
          src="https://picsum.photos/800/400?grayscale" 
          alt="Vintage robot diagram" 
          className="rounded-xl shadow-lg my-6 w-full object-cover h-64" 
        />
        <h3 className="text-xl font-semibold mt-6 mb-3">Key Characteristics</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Bipedalism:</strong> The ability to walk on two legs.</li>
          <li><strong>Manipulation:</strong> Hands capable of grasping objects.</li>
          <li><strong>Perception:</strong> Vision and sensing systems designed for human environments.</li>
        </ul>
      </div>
    ),
    nextChapter: 'brain'
  },
  {
    id: '2',
    title: '2. The Brain: AI & Neural Nets',
    slug: 'brain',
    prevChapter: 'intro',
    nextChapter: 'sensors',
    content: (
      <div className="space-y-6">
        <p>
          While the body provides the capability to act, the brain provides the intention. 
          Modern humanoids are powered by advanced Large Language Models (LLMs) and 
          Vision-Language-Action (VLA) models.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Transformer Architecture</h2>
        <p>
          The revolution in humanoid cognitive abilities is largely driven by the Transformer 
          architecture. Originally designed for text, it is now used to process multi-modal 
          sensory inputs—converting photons and sound waves into actionable motor commands.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-primary-500 my-4">
          <h4 className="font-bold text-primary-600 dark:text-primary-400">Code Example: A Simple Neuron</h4>
          <pre className="mt-2 text-sm overflow-x-auto text-gray-800 dark:text-gray-200">
{`def sigmoid(x):
  return 1 / (1 + math.exp(-x))

class Neuron:
  def __init__(self, weights, bias):
    self.weights = weights
    self.bias = bias

  def feedforward(self, inputs):
    total = np.dot(self.weights, inputs) + self.bias
    return sigmoid(total)`}
          </pre>
        </div>
      </div>
    )
  },
  {
    id: '3',
    title: '3. Sensors & Perception',
    slug: 'sensors',
    prevChapter: 'brain',
    nextChapter: 'locomotion',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">Seeing the World</h2>
        <p>
          To navigate a cluttered room, a humanoid relies on a suite of sensors.
          <strong> LiDAR</strong>, <strong>Stereo Cameras</strong>, and <strong>IMUs</strong> 
          (Inertial Measurement Units) work in concert to build a 3D voxel map of the environment.
        </p>
        <img 
          src="https://picsum.photos/800/400?blur" 
          alt="Sensor visualization" 
          className="rounded-xl shadow-lg my-6 w-full object-cover h-64" 
        />
        <h3 className="text-xl font-semibold mt-6 mb-3">Proprioception</h3>
        <p>
          Proprioception is the robot's sense of its own body position. Encoders in joints 
          tell the central computer the exact angle of every limb, allowing for precise 
          inverse kinematics calculations.
        </p>
      </div>
    )
  },
  {
    id: '4',
    title: '4. Locomotion & Control',
    slug: 'locomotion',
    prevChapter: 'sensors',
    nextChapter: 'ethics',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">Zero Moment Point (ZMP)</h2>
        <p>
          Walking is essentially a controlled fall. The ZMP algorithm ensures that the 
          robot's inertial forces are balanced by the reaction forces from the ground, 
          preventing it from tipping over.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3">Model Predictive Control (MPC)</h3>
        <p>
          Modern robots use MPC to look ahead into the future. They simulate thousands 
          of possible steps per second and choose the one that keeps them upright while 
          moving towards the goal.
        </p>
      </div>
    )
  },
  {
    id: '5',
    title: '5. Ethics & The Future',
    slug: 'ethics',
    prevChapter: 'locomotion',
    nextChapter: 'build',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">Asimov's Laws in 2024</h2>
        <p>
          As humanoids enter our homes, ethical considerations move from science fiction 
          to legal necessity. How do we ensure safety? Who is liable if a robot drops a 
          valuable vase, or worse, injures someone?
        </p>
        <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic text-gray-600 dark:text-gray-400 my-6">
          "A robot may not injure a human being or, through inaction, allow a human being to come to harm."
        </blockquote>
        <p>
          The future suggests a collaborative society, or "Cobots", where humans and androids work side-by-side.
        </p>
      </div>
    )
  },
  {
    id: '6',
    title: '6. Building Your Own',
    slug: 'build',
    prevChapter: 'ethics',
    nextChapter: 'cli',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">Simulation First</h2>
        <p>
          Before buying servos, start with simulation. <strong>MuJoCo</strong>, <strong>Gazebo</strong>, 
          and <strong>NVIDIA Isaac Sim</strong> are the playgrounds for modern roboticists.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3">The Tech Stack</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>OS:</strong> Ubuntu Linux (Real-time kernel)</li>
          <li><strong>Middleware:</strong> ROS 2 (Robot Operating System)</li>
          <li><strong>Brain:</strong> NVIDIA Jetson Orin or similar edge AI computer</li>
        </ul>
        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
          <h4 className="font-bold text-blue-800 dark:text-blue-300">Ready to start?</h4>
          <p className="mt-2 text-blue-700 dark:text-blue-400">
            Check out the GitHub repository linked in the navbar for a starter ROS 2 project template!
          </p>
        </div>
      </div>
    )
  },
  {
    id: '7',
    title: '7. Command Line Interface',
    slug: 'cli',
    prevChapter: 'build',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">Direct Neural Interface (CLI)</h2>
        <p>
          While GUIs are user-friendly, the true power of humanoid control lies in the terminal.
          The <strong>Humanoid CLI</strong> allows for direct memory access and low-level motor control.
        </p>
        <div className="bg-[#1e1e1e] border border-gray-700 rounded-lg p-4 font-mono text-sm shadow-2xl my-6">
           <div className="flex gap-1.5 mb-4 border-b border-gray-700 pb-2">
             <div className="w-3 h-3 rounded-full bg-red-500"></div>
             <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
             <div className="w-3 h-3 rounded-full bg-green-500"></div>
           </div>
           <div className="text-gray-300">
             <p className="mb-2"><span className="text-green-400">user@lab:~$</span> humanoid-cli connect --secure</p>
             <p className="mb-2 text-white">Establishing encrypted neural link... <span className="text-green-400">[CONNECTED]</span></p>
             <p className="mb-2"><span className="text-green-400">user@lab:~$</span> humanoid run --gait=sprint</p>
             <p className="mb-2 text-white">Warning: High torque mode enabled.</p>
             <p><span className="text-green-400">user@lab:~$</span> _</p>
           </div>
        </div>
        <p>
          You can experience this interface directly by using the floating terminal assistant on this site.
        </p>
      </div>
    )
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Why Humanoids are Finally Happening',
    date: 'October 12, 2024',
    author: 'Dr. Alan Turing II',
    excerpt: 'Batteries, motors, and AI have converged to make the impossible possible.',
    content: (
      <div>
        <p>For decades, humanoids were clumsy, expensive toys. Today, they are working in BMW factories.</p>
        <p className="mt-4">The convergence of high-density lithium batteries, torque-dense axial flux motors, and end-to-end neural network training has created an inflection point.</p>
      </div>
    )
  },
  {
    id: '2',
    title: 'Python for Robotics: A Crash Course',
    date: 'November 05, 2024',
    author: 'Guido van Robot',
    excerpt: 'FastAPI is not just for web apps—it is perfect for robot fleet management.',
    content: (
      <div>
        <p>Python is the lingua franca of AI. In this post, we explore how to use FastAPI to create a REST interface for your robot's telemetry data.</p>
      </div>
    )
  }
];