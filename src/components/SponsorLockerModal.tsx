import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Smartphone, Download, CheckCircle2, ArrowRight, X } from "lucide-react";
import { motion } from "framer-motion";

interface SponsorLockerModalProps {
    isOpen: boolean;
    onClose: () => void;
    accountName: string;
}

export const SponsorLockerModal = ({ isOpen, onClose, accountName }: SponsorLockerModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="w-[95%] max-w-md max-h-[90vh] rounded-xl bg-card border-gold/20 text-foreground p-0 overflow-hidden gap-0 [&>button]:hidden sm:rounded-xl flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-purple-500/5 pointer-events-none" />

                {/* Custom Close Button (Wrapped to avoid being hidden) */}
                <div className="absolute right-4 top-4 z-50">
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-muted-foreground hover:text-white transition-all duration-200 backdrop-blur-sm"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="overflow-y-auto flex-1">

                    {/* Header Section */}
                    <div className="p-6 pb-2 text-center relative z-10">
                        <div className="mx-auto w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4 border border-gold/30 animate-pulse-slow">
                            <ShieldCheck className="w-8 h-8 text-gold" />
                        </div>
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-black font-display text-center uppercase tracking-wide">
                                <span className="text-gradient-gold">Final Step Required</span>
                            </DialogTitle>
                            <DialogDescription className="text-center text-muted-foreground mt-2">
                                You are almost there! Complete the sponsor verification to secure <span className="text-foreground font-bold">{accountName}</span>.
                            </DialogDescription>
                        </DialogHeader>
                    </div>

                    {/* Steps Section */}
                    <div className="p-6 pt-2 space-y-6 relative z-10">
                        <div className="bg-secondary/50 rounded-xl p-4 border border-white/5 space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="font-bold text-primary">1</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-foreground">Sponsor Verification</h4>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Our sponsors cover the cost of this Premium OG Account. To unlock it for <span className="text-green-400 font-bold">FREE</span>, you need to verify you are human.
                                    </p>
                                </div>
                            </div>

                            <div className="h-px bg-white/10" />

                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <CheckCircle2 className="w-5 h-5 text-gold" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-foreground">How to Verify?</h4>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Simply <span className="text-gold font-bold">Download and Install 2 Free Apps</span> from our sponsor list. Open each app for 30 seconds to confirm.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <Button
                                className="w-full bg-gradient-to-r from-gold to-orange-500 hover:from-gold/90 hover:to-orange-500/90 text-white font-black font-display tracking-widest py-6 text-lg shadow-lg shadow-gold/20 animate-pulse-slow"
                                onClick={() => {
                                    // This would trigger the actual locker script or redirect
                                    console.log("Trigger locker");
                                }}
                            >
                                VERIFY & CLAIM NOW <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>

                            <p className="text-[10px] text-center text-muted-foreground">
                                *Verification is instant. Account credentials will be sent to your email immediately after completion.
                            </p>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
