import { GoeyToaster as GoeyToasterPrimitive, goeyToast } from "goey-toast"
import type { GoeyToasterProps } from "goey-toast"
import "goey-toast/styles.css"

export type {
  GoeyToastOptions,
  GoeyPromiseData,
  GoeyToastAction,
  GoeyToastClassNames,
  GoeyToastTimings,
} from "goey-toast"

function GoeyToaster(props: GoeyToasterProps) {
  return <GoeyToasterPrimitive position="bottom-right" {...props} />
}

// eslint-disable-next-line react-refresh/only-export-components
export { GoeyToaster, goeyToast, type GoeyToasterProps }
