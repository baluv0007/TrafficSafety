import { useState, useEffect } from 'react';
import { Car, Cloud, MapPin, Phone, Bus, ParkingCircle, Database, Zap, TrendingUp, MessageSquare, Navigation, AlertTriangle, Timer, DollarSign } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function TrafficWorkflowVisualization() {
  const section = useScrollAnimation({ threshold: 0.1 });
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const dataSources = [
    { icon: Car, label: 'Road sensors and detectors', color: 'from-blue-500 to-blue-600' },
    { icon: Cloud, label: 'Weather monitoring stations', color: 'from-cyan-500 to-cyan-600' },
    { icon: MapPin, label: 'Vehicle GPS and mobile data', color: 'from-green-500 to-green-600' },
    { icon: Phone, label: 'Incident reports and emergency calls', color: 'from-red-500 to-red-600' },
    { icon: Bus, label: 'Public transport tracking', color: 'from-yellow-500 to-yellow-600' },
    { icon: ParkingCircle, label: 'Parking system data', color: 'from-purple-500 to-purple-600' },
  ];

  const processingSteps = [
    { label: 'Data Collection & Aggregation', icon: Database },
    { label: 'Predictive Modeling & Forecasting', icon: TrendingUp },
    { label: 'Decision Engine & Strategy Selection', icon: Zap },
    { label: 'Control Signal Generation', icon: MessageSquare },
    { label: 'Implementation & Execution', icon: AlertTriangle },
  ];

  const outputs = [
    { icon: Timer, label: 'Traffic light timing adjustments' },
    { icon: MessageSquare, label: 'Dynamic message board updates' },
    { icon: Navigation, label: 'Route recommendations' },
    { icon: AlertTriangle, label: 'Emergency response dispatch' },
    { icon: ParkingCircle, label: 'Parking guidance' },
    { icon: Bus, label: 'Public transport prioritization' },
    { icon: DollarSign, label: 'Congestion pricing activation' },
  ];

  useEffect(() => {
    if (!section.isVisible) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setActiveStep((prev) => (prev + 1) % processingSteps.length);
      setTimeout(() => setIsAnimating(false), 800);
    }, 3000);

    return () => clearInterval(interval);
  }, [section.isVisible, processingSteps.length]);

  return (
    <div
      ref={section.elementRef}
      className={`mb-20 transition-all duration-1000 ${
        section.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Traffic Management Workflow Process
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our intelligent system integrates multiple data sources to deliver real-time traffic management solutions
        </p>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="relative">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-200 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Data Sources (Input)</h3>
              </div>
              <div className="space-y-4">
                {dataSources.map((source, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 transition-all duration-500 hover:shadow-md hover:scale-105 ${
                      section.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className={`bg-gradient-to-br ${source.color} w-10 h-10 rounded-lg flex items-center justify-center shadow-md flex-shrink-0`}>
                      <source.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{source.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
              <div className="relative">
                <svg width="40" height="100" className="overflow-visible">
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#f97316" />
                    </marker>
                  </defs>
                  <path
                    d="M 0 50 L 40 50"
                    stroke="#f97316"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    className="animate-pulse"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Processing Workflow</h3>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-200 via-orange-400 to-orange-200 transform -translate-x-1/2"></div>

                <div className="space-y-6">
                  {processingSteps.map((step, index) => (
                    <div key={index} className="relative">
                      <div
                        className={`relative bg-white rounded-xl p-4 border-2 transition-all duration-500 ${
                          activeStep === index
                            ? 'border-orange-500 shadow-lg scale-105 bg-gradient-to-r from-orange-50 to-white'
                            : 'border-gray-200 hover:border-orange-300'
                        } ${section.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center shadow-md transition-all duration-500 ${
                              activeStep === index
                                ? 'bg-gradient-to-br from-orange-500 to-orange-600 scale-110'
                                : 'bg-gradient-to-br from-gray-400 to-gray-500'
                            }`}
                          >
                            <step.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-sm font-semibold text-gray-800">{step.label}</span>
                        </div>
                      </div>

                      {index < processingSteps.length - 1 && (
                        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-3 z-10">
                          <svg width="20" height="20">
                            <polygon points="10,0 15,8 5,8" fill="#f97316" className={activeStep === index ? 'animate-pulse' : ''} />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full" style={{ position: 'absolute', top: 0, left: 0 }}>
                    <defs>
                      <linearGradient id="cycleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="#f97316" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#f97316" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 180 50 Q 230 50 230 150 Q 230 450 180 450"
                      stroke="url(#cycleGradient)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                      opacity="0.6"
                    >
                      <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                    </path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
              <div className="relative">
                <svg width="40" height="100" className="overflow-visible">
                  <path
                    d="M 0 50 L 40 50"
                    stroke="#f97316"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    className="animate-pulse"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Outputs & Actions</h3>
              </div>
              <div className="space-y-3">
                {outputs.map((output, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 transition-all duration-500 hover:shadow-md hover:scale-105 ${
                      section.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-gradient-to-br from-green-500 to-green-600 w-8 h-8 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                      <output.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{output.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 border-2 border-orange-200">
          <div className="text-center">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Continuous Management Cycle</h4>
            <p className="text-sm text-gray-600">
              The system continuously monitors, analyzes, and adapts to changing traffic conditions in real-time,
              ensuring optimal flow and safety through intelligent automation and data-driven decision making.
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <div className="flex gap-2">
            {processingSteps.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-500 ${
                  activeStep === index ? 'w-8 bg-orange-500' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
