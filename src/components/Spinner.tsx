import ClipLoader from "react-spinners/ClipLoader"
import { SpinnerProp } from "../types/util.type"

const Spinner = ({ loading }: SpinnerProp) => {
const override = {
    display: "block",
    margin: "100px auto"
}

  return (
    <ClipLoader 
    color="4338ca"
    loading={loading}
    cssOverride={override}
    size={150}
    />
  )
}

export default Spinner