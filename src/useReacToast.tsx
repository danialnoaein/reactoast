import { reacToastProps } from "./types";
import React from "react";

export function useReacToast(props: reacToastProps) {
  return props;
}

export interface ReacToastContainerProps {
  message: string;
}

export const ReacToastContainer: React.FC<ReacToastContainerProps> = (
  props
) => {
  return <div>{props.message}</div>;
};
