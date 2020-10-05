import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

export default function Screen(props) {
    return (
        <div className="screen">{props.screen}</div>
    )
}