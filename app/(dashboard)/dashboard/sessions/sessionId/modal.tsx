import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ConnectTerminalModal(onClick: any) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Connect to remote terminal</Button>
      </DialogTrigger>
      <DialogContent className="flex justify-center items-center gap-8">
        <div style={{ flex: 7 }}>
          <DialogHeader>
            <DialogTitle>Select New Host</DialogTitle>
            <DialogDescription>
              Select your terminal provider or set up a custom terminal!
            </DialogDescription>
          </DialogHeader>
        <div style={{ flex: 3 }}>
          <iframe src="http://127.0.0.1:8888/" style={{ width: '100%', height: '100%' }} />
        </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
