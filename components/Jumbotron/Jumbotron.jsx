import React from "react";
import { useRouter } from "next/router";

const Jumbotron = () => {
  const router = useRouter();

  return (
    <div className="jumbotron jumbotron-fluid mt-5">
      <div className="container">
        <h1 className="display-4">Meow meow</h1>
        <p className="lead">Find a cute meow meow to adopt</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => router.push("/cats")}
        >
          Start browsing
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
