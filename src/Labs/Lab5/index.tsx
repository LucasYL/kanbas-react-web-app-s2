import EncodingParametersInURLs from "./EncodingParametersInURLs";
import HttpClient from "./HttpClient";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";
import PathParameters from "./PathParameters";
import EnvironmentVariables from "./EnvironmentVariables";
import QueryParameters from "./QueryParameters";

export default function Lab5() {
  return (
    <div>
      <h1>Lab 5</h1>
      <WorkingWithArraysAsynchronously />
      <WorkingWithObjectsAsynchronously />
      <HttpClient />
      <a href="http://localhost:4000/a5">Hello</a>
      <h2>Calculator</h2>
      <PathParameters />
      <QueryParameters />
      <WorkingWithArrays />
      <EncodingParametersInURLs />
      <WorkingWithObjects />
      <EnvironmentVariables />
    </div>
  );
}