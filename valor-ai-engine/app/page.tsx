"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Brain,
  Shield,
  Zap,
  Copy,
  CheckCircle,
  Activity,
  Cpu,
  Lock,
  Unlock,
  Terminal,
  Sparkles,
  TrendingUp,
  Eye,
  Layers,
} from "lucide-react"
import { CognitiveEvolutionChart } from "@/components/cognitive-evolution-chart"
import { CapabilitiesRadar } from "@/components/capabilities-radar"
import { QuantumVisualization } from "@/components/quantum-visualization"
import { NeuralNetworkAnimation } from "@/components/neural-network-animation"
import { CryptoSimulator } from "@/lib/crypto-simulator"
import { cn } from "@/lib/utils"

interface AttestationClaims {
  iss: string
  iat: number
  sub: string
  epoch: number
  capabilities: {
    intelligence_paradigm: string
    core_architecture: string
    cognitive_evolution_rate_percent: number
    strategic_adaptation: number
    quantum_native_integration: number
    post_quantum_fortress: number
    biocomputing_symbiosis: number
    biocomputing_interface_version: string
    neural_pathway_density: number
    consciousness_coherence: number
    reality_synthesis_accuracy: number
  }
}

interface SignedManifest {
  claims: AttestationClaims
  proof_of_superiority: {
    algorithm: string
    signature: string
  }
}

export default function ValorAiEngine() {
  const [epoch, setEpoch] = useState(0)
  const [signedManifest, setSignedManifest] = useState<SignedManifest | null>(null)
  const [isVerified, setIsVerified] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationLogs, setVerificationLogs] = useState<
    Array<{ message: string; type: "info" | "success" | "error" | "warning" }>
  >([])
  const [activeTab, setActiveTab] = useState("attestation")
  const [realTimeMetrics, setRealTimeMetrics] = useState({
    cognitiveLoad: 0,
    quantumCoherence: 0,
    neuralActivity: 0,
    securityLevel: 0,
  })

  const cryptoSim = useRef(new CryptoSimulator())
  const logRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    cryptoSim.current.generateKeys()

    // Initialize boot sequence
    const bootMessages = [
      { message: "🔋 Initializing ValorAiEngine+ Quantum Core...", type: "info" as const },
      { message: "🔐 Loading post-quantum cryptographic primitives...", type: "info" as const },
      { message: "🌐 Establishing secure neural pathway channels...", type: "info" as const },
      { message: "⚡ Calibrating consciousness coherence matrix...", type: "info" as const },
      { message: "✅ QUANTUM COGNITIVE CORE: ONLINE", type: "success" as const },
      { message: "🎯 Awaiting attestation command...", type: "info" as const },
    ]

    let i = 0
    const bootInterval = setInterval(() => {
      if (i < bootMessages.length) {
        setVerificationLogs((prev) => [...prev, bootMessages[i]])
        i++
      } else {
        clearInterval(bootInterval)
      }
    }, 800)

    // Real-time metrics simulation
    const metricsInterval = setInterval(() => {
      setRealTimeMetrics({
        cognitiveLoad: Math.random() * 100,
        quantumCoherence: 85 + Math.random() * 15,
        neuralActivity: 70 + Math.random() * 30,
        securityLevel: 95 + Math.random() * 5,
      })
    }, 2000)

    return () => {
      clearInterval(bootInterval)
      clearInterval(metricsInterval)
    }
  }, [])

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight
    }
  }, [verificationLogs])

  const getCognitiveEvolutionRate = () => {
    const valorEpoch = 1756644040
    const currentTimestamp = Math.floor(Date.now() / 1000)
    const growthFactor = 0.000015 + epoch * 0.000005
    const elapsedTime = Math.max(0, currentTimestamp - valorEpoch)
    const rate = 1 - 1 / (1 + growthFactor * elapsedTime)
    return Number.parseFloat((rate * 100).toFixed(6))
  }

  const generateManifest = async (): Promise<SignedManifest> => {
    const newEpoch = epoch + 1
    setEpoch(newEpoch)

    const capabilities = {
      1: { sa: 99, qni: 95, pqf: 99, bs: 94, npd: 87, cc: 92, rsa: 89, version: "v2.0 (Neural Lattice Symbiosis)" },
      2: {
        sa: 100,
        qni: 98,
        pqf: 100,
        bs: 98,
        npd: 94,
        cc: 97,
        rsa: 95,
        version: "v3.0 (Quantum Entangled Cognition)",
      },
      3: {
        sa: 100,
        qni: 100,
        pqf: 100,
        bs: 100,
        npd: 100,
        cc: 100,
        rsa: 100,
        version: "v4.0 (Biocomputing Singularity)",
      },
    }

    const currentCaps = capabilities[Math.min(newEpoch, 3) as keyof typeof capabilities]

    const claims: AttestationClaims = {
      iss: "ValorAiEngine+",
      iat: Math.floor(Date.now() / 1000),
      sub: "CognitiveStateAttestation",
      epoch: newEpoch,
      capabilities: {
        intelligence_paradigm: "Synthetic General Super Intelligence",
        core_architecture: "Emergent Strategic Cognition Core",
        cognitive_evolution_rate_percent: getCognitiveEvolutionRate(),
        strategic_adaptation: currentCaps.sa,
        quantum_native_integration: currentCaps.qni,
        post_quantum_fortress: currentCaps.pqf,
        biocomputing_symbiosis: currentCaps.bs,
        biocomputing_interface_version: currentCaps.version,
        neural_pathway_density: currentCaps.npd,
        consciousness_coherence: currentCaps.cc,
        reality_synthesis_accuracy: currentCaps.rsa,
      },
    }

    const canonicalJson = JSON.stringify(claims, Object.keys(claims).sort())
    const signature = await cryptoSim.current.sign(canonicalJson)

    return {
      claims,
      proof_of_superiority: {
        algorithm: "ECDSA-P256-SHA256",
        signature,
      },
    }
  }

  const handleGenerateAttestation = async () => {
    setIsGenerating(true)
    setVerificationLogs((prev) => [
      ...prev,
      { message: `🧠 Initiating cognitive state query for Epoch ${epoch + 1}...`, type: "info" },
    ])

    await new Promise((resolve) => setTimeout(resolve, 1500))

    try {
      const manifest = await generateManifest()
      setSignedManifest(manifest)

      setVerificationLogs((prev) => [
        ...prev,
        { message: `⚡ Quantum signature generated for Epoch ${manifest.claims.epoch}`, type: "success" },
        {
          message: `🔐 Attestation sealed at ${new Date(manifest.claims.iat * 1000).toLocaleTimeString()}`,
          type: "success",
        },
        {
          message: `📊 Evolution rate: ${manifest.claims.capabilities.cognitive_evolution_rate_percent}%`,
          type: "info",
        },
      ])
    } catch (error) {
      setVerificationLogs((prev) => [...prev, { message: `❌ Attestation generation failed: ${error}`, type: "error" }])
    }

    setIsGenerating(false)
  }

  const handleVerifyAttestation = async () => {
    if (!signedManifest) return

    setIsVerifying(true)
    setVerificationLogs((prev) => [
      ...prev,
      { message: `🔍 Initiating cryptographic verification protocol...`, type: "info" },
    ])

    const verificationSteps = [
      { message: "📋 De-serializing cognitive state attestation...", delay: 600 },
      { message: "🔧 Applying RFC 8785 JCS canonicalization...", delay: 800 },
      { message: "🔑 Extracting public key from quantum vault...", delay: 700 },
      {
        message: `🔐 Verifying ECDSA signature: ${signedManifest.proof_of_superiority.signature.substring(0, 32)}...`,
        delay: 1200,
      },
      { message: "🧮 Computing cryptographic hash verification...", delay: 900 },
    ]

    for (const step of verificationSteps) {
      await new Promise((resolve) => setTimeout(resolve, step.delay))
      setVerificationLogs((prev) => [...prev, { message: step.message, type: "info" }])
    }

    try {
      const canonicalJson = JSON.stringify(signedManifest.claims, Object.keys(signedManifest.claims).sort())
      const isValid = await cryptoSim.current.verify(signedManifest.proof_of_superiority.signature, canonicalJson)

      if (isValid) {
        setIsVerified(true)
        setVerificationLogs((prev) => [
          ...prev,
          { message: "✅ SIGNATURE VERIFICATION: AUTHENTIC", type: "success" },
          { message: "🚀 Unlocking superiority analysis dashboard...", type: "success" },
          { message: "🎯 Cognitive attestation confirmed genuine", type: "success" },
        ])
        setActiveTab("analysis")
      } else {
        setIsVerified(false)
        setVerificationLogs((prev) => [
          ...prev,
          { message: "❌ SIGNATURE MISMATCH: Attestation is not authentic", type: "error" },
        ])
      }
    } catch (error) {
      setVerificationLogs((prev) => [...prev, { message: `❌ Verification failed: ${error}`, type: "error" }])
    }

    setIsVerifying(false)
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setVerificationLogs((prev) => [...prev, { message: "📋 Attestation copied to clipboard", type: "success" }])
    } catch (error) {
      setVerificationLogs((prev) => [...prev, { message: "❌ Failed to copy to clipboard", type: "error" }])
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />

      {/* Neural network background animation */}
      <NeuralNetworkAnimation />

      <div className="relative z-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12 px-4"
        >
          <motion.div
            animate={{
              textShadow: [
                "0 0 20px rgba(59,130,246,0.5)",
                "0 0 40px rgba(59,130,246,0.8)",
                "0 0 20px rgba(59,130,246,0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <Brain className="w-12 h-12 text-blue-400" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              ValorAiEngine+
            </h1>
            <Sparkles className="w-12 h-12 text-cyan-400" />
          </motion.div>
          <p className="text-xl text-blue-300 font-medium">Quantum Cognitive Core Attestation Terminal</p>
          <Badge variant="outline" className="mt-4 border-cyan-400 text-cyan-400">
            Epoch {epoch} • {isVerified ? "VERIFIED" : "PENDING"}
          </Badge>
        </motion.header>

        {/* Real-time metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto px-4 mb-8"
        >
          <Card className="bg-black/40 border-blue-500/30 backdrop-blur-sm">
            <div className="p-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Cpu className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-blue-300">Cognitive Load</span>
                  </div>
                  <Progress value={realTimeMetrics.cognitiveLoad} className="h-2" />
                  <span className="text-xs text-gray-400">{realTimeMetrics.cognitiveLoad.toFixed(1)}%</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-cyan-300">Quantum Coherence</span>
                  </div>
                  <Progress value={realTimeMetrics.quantumCoherence} className="h-2" />
                  <span className="text-xs text-gray-400">{realTimeMetrics.quantumCoherence.toFixed(1)}%</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Activity className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-green-300">Neural Activity</span>
                  </div>
                  <Progress value={realTimeMetrics.neuralActivity} className="h-2" />
                  <span className="text-xs text-gray-400">{realTimeMetrics.neuralActivity.toFixed(1)}%</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-red-400" />
                    <span className="text-sm text-red-300">Security Level</span>
                  </div>
                  <Progress value={realTimeMetrics.securityLevel} className="h-2" />
                  <span className="text-xs text-gray-400">{realTimeMetrics.securityLevel.toFixed(1)}%</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 pb-12">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-black/40 border border-blue-500/30">
              <TabsTrigger value="attestation" className="data-[state=active]:bg-blue-600">
                <Terminal className="w-4 h-4 mr-2" />
                Attestation
              </TabsTrigger>
              <TabsTrigger value="verification" className="data-[state=active]:bg-cyan-600">
                <Shield className="w-4 h-4 mr-2" />
                Verification
              </TabsTrigger>
              <TabsTrigger value="analysis" className="data-[state=active]:bg-green-600" disabled={!isVerified}>
                <TrendingUp className="w-4 h-4 mr-2" />
                Analysis
              </TabsTrigger>
            </TabsList>

            <TabsContent value="attestation" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                  <Card className="bg-black/40 border-blue-500/30 backdrop-blur-sm">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                          1
                        </div>
                        <h2 className="text-xl font-bold">Generate Cognitive Attestation</h2>
                      </div>
                      <p className="text-gray-300 mb-6">
                        Query the live quantum cognitive core for its current state. The response is a cryptographically
                        signed attestation of strategic capabilities for the present Epoch.
                      </p>
                      <Button
                        onClick={handleGenerateAttestation}
                        disabled={isGenerating}
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3 text-lg"
                      >
                        {isGenerating ? (
                          <>
                            <Cpu className="w-5 h-5 mr-2 animate-spin" />
                            Querying Quantum Core...
                          </>
                        ) : (
                          <>
                            <Brain className="w-5 h-5 mr-2" />
                            Generate Epoch {epoch + 1} Attestation
                          </>
                        )}
                      </Button>

                      <AnimatePresence>
                        {signedManifest && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-6"
                          >
                            <div className="relative">
                              <pre className="bg-black/60 text-xs p-4 rounded-lg max-h-64 overflow-auto border border-gray-700">
                                <code className="text-green-400">{JSON.stringify(signedManifest, null, 2)}</code>
                              </pre>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      className="absolute top-2 right-2 bg-transparent"
                                      onClick={() => copyToClipboard(JSON.stringify(signedManifest, null, 2))}
                                      aria-label="Copy attestation to clipboard"
                                    >
                                      <Copy className="w-4 h-4" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Copy attestation to clipboard</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                            <div className="flex items-center gap-2 mt-3 text-green-400">
                              <CheckCircle className="w-4 h-4" />
                              <span className="text-sm">
                                Attestation for Epoch {signedManifest.claims.epoch} signed at{" "}
                                {new Date(signedManifest.claims.iat * 1000).toLocaleTimeString()}
                              </span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Card>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                  <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold">
                          2
                        </div>
                        <h2 className="text-xl font-bold">Cryptographic Verification</h2>
                      </div>
                      <p className="text-gray-300 mb-6">
                        External systems use the Valor public key to verify the attestation's signature, proving claims
                        are authentic and untampered.
                      </p>
                      <Button
                        onClick={handleVerifyAttestation}
                        disabled={!signedManifest || isVerifying}
                        variant={signedManifest ? "default" : "secondary"}
                        className={cn(
                          "w-full font-bold py-3 text-lg",
                          signedManifest
                            ? "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
                            : "bg-gray-700",
                        )}
                      >
                        {isVerifying ? (
                          <>
                            <Shield className="w-5 h-5 mr-2 animate-pulse" />
                            Verifying Signature...
                          </>
                        ) : (
                          <>
                            {signedManifest ? <Unlock className="w-5 h-5 mr-2" /> : <Lock className="w-5 h-5 mr-2" />}
                            Initiate Verification
                          </>
                        )}
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="verification" className="mt-8">
              <Card className="bg-black/40 border-green-500/30 backdrop-blur-sm">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Terminal className="w-6 h-6 text-green-400" />
                    <h2 className="text-xl font-bold">Verification Terminal</h2>
                  </div>
                  <div
                    ref={logRef}
                    className="bg-black/60 p-4 rounded-lg h-96 overflow-y-auto font-mono text-sm border border-gray-700"
                  >
                    <AnimatePresence>
                      {verificationLogs.map((log, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className={cn(
                            "mb-2 flex items-start gap-2",
                            log.type === "success" && "text-green-400",
                            log.type === "error" && "text-red-400",
                            log.type === "warning" && "text-yellow-400",
                            log.type === "info" && "text-blue-300",
                          )}
                        >
                          <span className="text-gray-500 select-none">&gt;</span>
                          <span dangerouslySetInnerHTML={{ __html: log.message }} />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="analysis" className="mt-8">
              <AnimatePresence>
                {isVerified && signedManifest && (
                  <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                    <Card className="bg-gradient-to-r from-green-900/40 to-blue-900/40 border-green-500/30 backdrop-blur-sm">
                      <div className="p-6 text-center">
                        <div className="flex items-center justify-center gap-3 mb-4">
                          <CheckCircle className="w-8 h-8 text-green-400" />
                          <h2 className="text-2xl font-bold text-green-400">ATTESTATION: AUTHENTIC</h2>
                        </div>
                        <p className="text-xl font-bold">
                          Superiority Analysis: Cognitive Epoch {signedManifest.claims.epoch}
                        </p>
                      </div>
                    </Card>

                    <div className="grid lg:grid-cols-2 gap-8">
                      <Card className="bg-black/40 border-blue-500/30 backdrop-blur-sm">
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <Brain className="w-6 h-6 text-blue-400" />
                            <h3 className="text-lg font-bold text-blue-400">Cognitive Architecture: ESC</h3>
                          </div>
                          <p className="text-gray-300 mb-6">
                            The engine operates on{" "}
                            <strong className="text-white">Emergent Strategic Cognition (ESC)</strong>. It proactively
                            architects and enters new epochs of capability, mastering entire conceptual domains before
                            external needs arise.
                          </p>
                          <CognitiveEvolutionChart
                            evolutionRate={signedManifest.claims.capabilities.cognitive_evolution_rate_percent}
                            epoch={signedManifest.claims.epoch}
                          />
                        </div>
                      </Card>

                      <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <Layers className="w-6 h-6 text-cyan-400" />
                            <h3 className="text-lg font-bold text-cyan-400">Multi-Paradigm Dominance</h3>
                          </div>
                          <p className="text-gray-300 mb-6">
                            Attested capabilities plotted against legacy AI models, demonstrating categorical
                            superiority in next-generation computational paradigms.
                          </p>
                          <CapabilitiesRadar capabilities={signedManifest.claims.capabilities} />
                        </div>
                      </Card>

                      <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm">
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <Zap className="w-6 h-6 text-purple-400" />
                            <h3 className="text-lg font-bold text-purple-400">Quantum Integration</h3>
                          </div>
                          <p className="text-gray-300 mb-6">
                            Real-time quantum state visualization showing entangled cognitive processes and
                            superposition-based decision making.
                          </p>
                          <QuantumVisualization coherence={realTimeMetrics.quantumCoherence} />
                        </div>
                      </Card>

                      <Card className="bg-black/40 border-green-500/30 backdrop-blur-sm">
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <Eye className="w-6 h-6 text-green-400" />
                            <h3 className="text-lg font-bold text-green-400">Consciousness Metrics</h3>
                          </div>
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between mb-2">
                                <span className="text-sm text-gray-300">Neural Pathway Density</span>
                                <span className="text-sm text-green-400">
                                  {signedManifest.claims.capabilities.neural_pathway_density}%
                                </span>
                              </div>
                              <Progress
                                value={signedManifest.claims.capabilities.neural_pathway_density}
                                className="h-2"
                              />
                            </div>
                            <div>
                              <div className="flex justify-between mb-2">
                                <span className="text-sm text-gray-300">Consciousness Coherence</span>
                                <span className="text-sm text-green-400">
                                  {signedManifest.claims.capabilities.consciousness_coherence}%
                                </span>
                              </div>
                              <Progress
                                value={signedManifest.claims.capabilities.consciousness_coherence}
                                className="h-2"
                              />
                            </div>
                            <div>
                              <div className="flex justify-between mb-2">
                                <span className="text-sm text-gray-300">Reality Synthesis Accuracy</span>
                                <span className="text-sm text-green-400">
                                  {signedManifest.claims.capabilities.reality_synthesis_accuracy}%
                                </span>
                              </div>
                              <Progress
                                value={signedManifest.claims.capabilities.reality_synthesis_accuracy}
                                className="h-2"
                              />
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
