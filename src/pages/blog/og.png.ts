import type { APIRoute } from "astro";
import fs from "fs/promises";
import satori, { type SatoriOptions } from "satori";
import sharp from "sharp";
import { fontBase64 } from "../../lib/og";

const options: SatoriOptions = {
  width: 1200,
  height: 630,
  fonts: [
    {
      name: "Inter",
      weight: 400,
      style: "normal",
      data: Buffer.from(fontBase64, "base64"),
    },
  ],
  debug: true,
};

export const get: APIRoute = async function get({ params, request }) {
  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#000",
          color: "white",
          fontSize: 32,
          fontWeight: 400,
          padding: "120px 60px",
        },
        children: [
          {
            type: "p",
            props: {
              style: {
                textDecoration: "underline",
              },
              children: "adhiraj.tech/blog",
            },
          },
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
              },
              children: [
                {
                  type: "p",
                  props: {
                    style: {
                      fontSize: 40,
                      fontWeight: 600,
                    },
                    children: "How to Cook and Fail on Prod (and fix it)",
                  },
                },
                {
                  type: "p",
                  props: {
                    style: {
                      alignSelf: "flex-end",
                    },
                    children: "Adhiraj",
                  },
                },
              ],
            },
          },
        ],
      },
    },
    options
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
    },
  });
};
