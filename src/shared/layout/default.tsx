import { FC } from "react"

type Props = {
  children?: React.ReactElement | React.ReactElement[]
}

const DefaultLayout: FC<Props> = ({
  children,
}) => {

  return (
    <div className="container">
      <div className="flex-center">
      </div>
    </div>
  )
}

export default DefaultLayout