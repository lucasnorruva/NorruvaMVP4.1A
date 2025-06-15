
// --- File: src/components/developer/docs/api-reference/ApiReferenceZkpLayerEndpoints.tsx ---
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileJson, Server, Layers3, KeyRound } from "lucide-react";

interface ApiReferenceZkpLayerEndpointsProps {
  exampleZkpSubmitRequestBody: string;
  exampleZkpSubmitResponseBody: string;
  exampleZkpVerifyResponseBody: string;
  error400General: string;
  error401: string;
  error404: string;
  error500: string;
}

export default function ApiReferenceZkpLayerEndpoints({
  exampleZkpSubmitRequestBody,
  exampleZkpSubmitResponseBody,
  exampleZkpVerifyResponseBody,
  error400General,
  error401,
  error404,
  error500,
}: ApiReferenceZkpLayerEndpointsProps) {
  return (
    <section id="zkp-layer-endpoints" className="mt-8">
      <h2 className="text-2xl font-semibold font-headline mt-8 mb-4 flex items-center">
        <KeyRound className="mr-3 h-6 w-6 text-primary" /> Zero-Knowledge Proof Endpoints (Conceptual)
      </h2>
      <p className="text-sm text-muted-foreground mb-4">
        Endpoints for submitting and verifying Zero-Knowledge Proofs (ZKPs) to attest to private data without revealing it. These are highly conceptual and future-facing.
      </p>

      <Card className="shadow-lg mt-6">
        <CardHeader>
          <CardTitle className="text-lg">Submit Zero-Knowledge Proof for a DPP</CardTitle>
          <CardDescription>
            <span className="inline-flex items-center font-mono text-sm">
              <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300 mr-2 font-semibold">POST</Badge>
              <code className="bg-muted px-1 py-0.5 rounded-sm">/api/v1/zkp/submit-proof/{"{dppId}"}</code>
            </span>
            <br />
            [ZKP Layer - Highly Conceptual] Allows a prover (e.g., manufacturer, supplier) to submit a Zero-Knowledge Proof (ZKP) related to a specific DPP. This endpoint is a placeholder for a complex ZKP system interaction.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <section>
            <h4 className="font-semibold mb-1">Path Parameters</h4>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li><code className="bg-muted px-1 py-0.5 rounded-sm font-mono text-xs">dppId</code> (string, required): The unique identifier of the Digital Product Passport this proof relates to.</li>
            </ul>
          </section>
          <section>
            <h4 className="font-semibold mb-1">Request Body (JSON) - ZkpSubmissionRequest</h4>
            <p className="text-sm mb-1">Details of the ZKP submission. This would be highly specific to the claim type and ZKP circuit being used. Includes <code className="bg-muted px-1 py-0.5 rounded-sm font-mono text-xs">claimType</code>, <code className="bg-muted px-1 py-0.5 rounded-sm font-mono text-xs">proofData</code>, and optional <code className="bg-muted px-1 py-0.5 rounded-sm font-mono text-xs">publicInputs</code>.</p>
            <details className="border rounded-md">
              <summary className="cursor-pointer p-2 bg-muted hover:bg-muted/80 text-sm">
                <FileJson className="inline h-4 w-4 mr-1 align-middle" />Example JSON Request Body
              </summary>
              <pre className="bg-muted/50 p-3 rounded-b-md text-xs overflow-x-auto max-h-96">
                <code>{exampleZkpSubmitRequestBody}</code>
              </pre>
            </details>
          </section>
          <section>
            <h4 className="font-semibold mb-1">Example Response (Success 202 Accepted)</h4>
            <p className="text-sm mb-1">Returns an acknowledgement that the ZKP submission has been received.</p>
            <details className="border rounded-md">
              <summary className="cursor-pointer p-2 bg-muted hover:bg-muted/80 text-sm">
                <FileJson className="inline h-4 w-4 mr-1 align-middle" />Example JSON Response
              </summary>
              <pre className="bg-muted/50 p-3 rounded-b-md text-xs overflow-x-auto max-h-96">
                <code>{exampleZkpSubmitResponseBody}</code>
              </pre>
            </details>
          </section>
          <section>
            <h4 className="font-semibold mb-1 mt-3">Common Error Responses</h4>
            <ul className="list-disc list-inside text-sm space-y-2">
              <li><code className="bg-muted px-1 py-0.5 rounded-sm font-mono text-xs">400 Bad Request</code> (e.g., missing claimType or proofData).</li>
              <li><code className="bg-muted px-1 py-0.5 rounded-sm font-mono text-xs">401 Unauthorized</code>.</li>
              <li><code className="bg-muted px-1 py-0.5 rounded-sm font-mono text-xs">404 Not Found</code> (DPP not found).</li>
              <li><code className="bg-muted px-1 py-0.5 rounded-sm font-mono text-xs">500 Internal Server Error</code>.</li>
            </ul>
          </section>
        </CardContent>
      </Card>

      <Card className="shadow-lg mt-6">
        <CardHeader>
          <CardTitle className="text-lg">Verify Claim with ZKP for a DPP</CardTitle>
          <CardDescription>
            <span className="inline-flex items-center font-mono text-sm">
              <Badge variant="outline" className="bg-sky-100 text-sky-700 border-sky-300 mr-2 font-semibold">GET</Badge>
              <code className="bg-muted px-1 py-0.5 rounded-sm">/api/v1/zkp/verify-claim/{"{dppId}"}?claimType=...</code>
            </span>
            <br />
            [ZKP Layer - Highly Conceptual] Allows a verifier to check if a specific claim for a DPP has a valid (mock) Zero-Knowledge Proof associated with it.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <section>
            <h4 className="font-semibold mb-1">Path Parameters</h4>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li><code className="bg-muted px-1 py-0.5 rounded-sm font-mono text-xs">dppId</code> (string, required): The unique identifier of the Digital Product Passport.</li>
            </ul>
          </section>
          <section>
            <h4 className="font-semibold mb-1">Query Parameters</h4>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li><code className="bg-muted px-1 py-0.5 rounded-sm font-mono text-xs">claimType</code> (string, required): The specific claim to verify (e.g., "material_compliance_svhc_lead_less_0.1").</li>
            </ul>
          </section>
          <section>
            <h4 className="font-semibold mb-1">Example Response (Success 200 OK)</h4>
            <p className="text-sm mb-1">Returns the verification status of the ZKP claim.</p>
            <details className="border rounded-md">
              <summary className="cursor-pointer p-2 bg-muted hover:bg-muted/80 text-sm">
                <FileJson className="inline h-4 w-4 mr-1 align-middle" />Example JSON Response
              </summary>
              <pre className="bg-muted/50 p-3 rounded-b-md text-xs overflow-x-auto max-h-96">
                <code>{exampleZkpVerifyResponseBody}</code>
              </pre>
            </details>
          </section>
          <section>
            <h4 className="font-semibold mb-1 mt-3">Common Error Responses</h4>
            <ul className="list-disc list-inside text-sm space-y-2">
              <li><code className="bg-muted px-1 py-0.5 rounded-sm font-mono text-xs">400 Bad Request</code> (e.g., missing claimType).</li>
              <li><code className="bg-muted px-1 py-0.5 rounded-sm font-mono text-xs">401 Unauthorized</code>.</li>
              <li><code className="bg-muted px-1 py-0.5 rounded-sm font-mono text-xs">404 Not Found</code> (DPP or specified claim proof not found).</li>
              <li><code className="bg-muted px-1 py-0.5 rounded-sm font-mono text-xs">500 Internal Server Error</code>.</li>
            </ul>
          </section>
        </CardContent>
      </Card>
    </section>
  );
}
