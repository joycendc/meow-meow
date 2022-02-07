import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Nav from "../../components/Nav/Nav";
import DefaultLayout from "../../layouts/Default";
import Head from "next/head";

const CatDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [cat, setCat] = useState(null);
  const fetchCat = async () => {
    const response = await fetch(`/api/cats/${id}`);

    const data = await response.json();

    setCat(data);
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <>
      <DefaultLayout>
        {cat && (
          <>
            <Head>
              <title>Cat - {cat.name}</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container mt-5 flex" style={{ display: "flex" }}>
              <img
                src={cat.image.url}
                alt={cat.image.alt}
                style={{ height: "200px" }}
              />
              <div className="mx-5">
                <h1>{cat.name}</h1>
                <p>{cat.description}</p>
              </div>
            </div>
          </>
        )}
      </DefaultLayout>
    </>
  );
};

export default CatDetails;
