import { useRef } from "react";

import "./styles.css";

import useIntersection from "./useIntersection";

export default function App() {
  const ref = useRef();
  const inViewport = useIntersection(ref, "0px");

  if (inViewport) {
    console.log("in viewport:", ref.current);
  }

  return (
    <div className="App">
      {inViewport && <div>in viewport</div>}
      <span ref={ref} role="img" aria-label="wave">
        👋
      </span>
      {Array(10)
        .fill(0)
        .map((v, i) => (
          <p key={i}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>
        ))}
    </div>
  );
}
