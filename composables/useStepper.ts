import { Stepper } from "~/types/common";

export function useStepper() {
  const stepper = reactive({
    show: false,
    continueLink: "",
    txLinkPrefix: "https://api.bwasmnet-1.bitsong.network/txs/",
  });

  const setContinueLink = (link: string) => {
    stepper.continueLink = link;
  };

  const setTxLinkPrefix = (prefix: string) => {
    stepper.txLinkPrefix = prefix;
  };

  const setShow = (show: boolean) => {
    stepper.show = show;
  };

  const steps = reactive<Stepper[]>([
    {
      title: "Uploading Metadata",
      subtitle: "Uploading metadata to the interplanetary file system",
      status: "pending",
      //errorMessage: ""
    },
    {
      title: "Deploying new Launch Party",
      subtitle: "Deploying new Launch Party to the BitSong blockchain",
      status: "pending",
      //txHash: "dsds",
      //errorMessage: "Error deploying new Launch Party",
    },
    {
      title: "Indexing Launch Party",
      subtitle: "Indexing your new Launch Party, this will take a few seconds",
      status: "pending",
      //errorMessage: ""
    },
  ]);

  watch(
    stepper,
    (value) => {
      if (!value) {
        setTimeout(() => reset(), 500);
      }
    },
    { immediate: true }
  );

  const reset = () => {
    stepper.show = false;
    for (const step of steps) {
      step.status = "pending";
      step.errorMessage = "";
      step.txHash = "";
    }
  };

  const setStatus = (
    index: number,
    status: "pending" | "loading" | "done" | "error"
  ) => {
    steps[index].status = status;
  };

  const getStatus = (index: number) => {
    return steps[index].status;
  };

  const setErrorMessage = (index: number, errorMessage: any) => {
    steps[index].errorMessage = errorMessage;
  };

  const setTxHash = (index: number, txHash: string) => {
    steps[index].txHash = txHash;
  };

  const setSteps = (steps: Stepper[]) => {
    steps = steps;
  };

  return {
    stepper,
    steps,
    reset,
    getStatus,
    setStatus,
    setErrorMessage,
    setTxHash,
    setSteps,
    setContinueLink,
    setTxLinkPrefix,
    setShow,
  };
}
