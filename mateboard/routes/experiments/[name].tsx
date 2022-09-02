/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import ExperimentView from "../../islands/ExperimentView.tsx";
import { useEffect, useState } from "preact/hooks";
import { asset } from "$fresh/runtime.ts";

export default function (props: PageProps) {
  const experimentName = props.params.name;
  return <ExperimentView experimentName={experimentName} />;
}
