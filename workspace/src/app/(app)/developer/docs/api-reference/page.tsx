
import { BookText } from "lucide-react";
import { MOCK_DPPS } from "@/data";
import DocsPageLayout from '@/components/developer/DocsPageLayout';
import ApiReferenceIntro from '@/components/developer/docs/ApiReferenceIntro';
import ApiReferenceDppEndpoints from '@/components/developer/docs/ApiReferenceDppEndpoints';
import ApiReferenceQrEndpoints from '@/components/developer/docs/ApiReferenceQrEndpoints';
import ApiReferenceComplianceEndpoints from '@/components/developer/docs/ApiReferenceComplianceEndpoints';
import ApiReferenceTokenEndpoints from '@/components/developer/docs/ApiReferenceTokenEndpoints';
import ApiReferencePrivateLayerEndpoints from '@/components/developer/docs/api-reference/ApiReferencePrivateLayerEndpoints';
import ApiReferenceZkpLayerEndpoints from '@/components/developer/docs/api-reference/ApiReferenceZkpLayerEndpoints';
import type { DigitalProductPassport } from "@/types/dpp";

export default function ApiReferencePage() {
  const exampleDppForResponse = MOCK_DPPS.find(dpp => dpp.id === "DPP005") || MOCK_DPPS[0];
  const exampleDppResponse = JSON.stringify(exampleDppForResponse, null, 2);

  const exampleListDppsResponse = JSON.stringify({
    data: [
      MOCK_DPPS.find(dpp => dpp.id === "DPP001") || MOCK_DPPS[0],
    ],
    filtersApplied: {
      status: "published",
      category: "Electronics",
      blockchainAnchored: "all",
      searchQuery: "EcoSmart"
    },
    totalCount: 1
  }, null, 2);


  const qrValidationResponseExample = {
    productId: MOCK_DPPS[0].id,
    productName: MOCK_DPPS[0].productName,
    category: MOCK_DPPS[0].category,
    manufacturer: MOCK_DPPS[0].manufacturer?.name || "N/A",
    verificationStatus: "valid_dpp_found", 
    dppUrl: `/passport/${MOCK_DPPS[0].id}`,
    ebsiCompliance: {
      status: MOCK_DPPS[0].ebsiVerification?.status || "unknown",
      verificationId: MOCK_DPPS[0].ebsiVerification?.verificationId
    },
    blockchainAnchor: {
      transactionHash: MOCK_DPPS[0].blockchainIdentifiers?.anchorTransactionHash,
      platform: MOCK_DPPS[0].blockchainIdentifiers?.platform
    }
  };
  const exampleQrValidationResponse = JSON.stringify(qrValidationResponseExample, null, 2);

  const mintTokenRequest = JSON.stringify({
    contractAddress: "0xABCDEF123456",
    recipientAddress: "0x1234567890",
    metadataUri: "ipfs://sample-metadata"
  }, null, 2);

  const mintTokenResponse = JSON.stringify({
    tokenId: "1",
    contractAddress: "0xABCDEF123456",
    transactionHash: "0xMINTTX123"
  }, null, 2);

  const updateTokenRequest = JSON.stringify({
    metadataUri: "ipfs://updated-metadata",
    contractAddress: "0xABCDEF123456"
  }, null, 2);

  const updateTokenResponse = JSON.stringify({
    tokenId: "1",
    contractAddress: "0xABCDEF123456",
    transactionHash: "0xUPDATETX456"
  }, null, 2);

  const tokenStatusResponse = JSON.stringify({
    tokenId: "1",
    contractAddress: "0xABCDEF123456",
    ownerAddress: "0x1234567890",
    mintedAt: new Date().toISOString(),
    metadataUri: "ipfs://sample-metadata",
    lastTransactionHash: "0xUPDATETX456",
    status: "minted"
  }, null, 2);

  const error401 = JSON.stringify({ error: { code: 401, message: "API key missing or invalid." } }, null, 2);
  const error404 = JSON.stringify({ error: { code: 404, message: "Resource not found." } }); 
  const error400_general = JSON.stringify({ error: { code: 400, message: "Invalid request payload or parameters." } }, null, 2);
  const error400_qr = JSON.stringify({ error: { code: 400, message: "Invalid request body. 'qrIdentifier' is required." } }, null, 2);
  const error500 = JSON.stringify({ error: { code: 500, message: "An unexpected error occurred on the server." } }, null, 2);

  const conceptualCreateDppRequestBody = JSON.stringify({
    productName: "Sustainable Smart Watch Series 5",
    category: "Wearable Technology",
    gtin: "09876543210123",
    manufacturerName: "FutureGadgets Inc.",
    modelNumber: "SW-S5-ECO",
    productDetails: {
      description: "The latest smart watch with a focus on sustainability, featuring a recycled aluminum case and energy-efficient display.",
      materials: [
        { name: "Recycled Aluminum (Case)", percentage: 80, isRecycled: true },
        { name: "Organic Polymer (Strap)", percentage: 20 }
      ],
      energyLabel: "A",
      customAttributes: [
        { "key": "Display Type", "value": "AMOLED" },
        { "key": "OS", "value": "WearOS" }
      ]
    }
  }, null, 2);

  const conceptualCreateDppResponseBody = JSON.stringify({
    id: "DPP_API_12345", 
    version: 1,
    productName: "Sustainable Smart Watch Series 5",
    category: "Wearable Technology",
    gtin: "09876543210123",
    manufacturer: { name: "FutureGadgets Inc." },
    modelNumber: "SW-S5-ECO",
    metadata: {
      created_at: new Date().toISOString(), 
      last_updated: new Date().toISOString(),
      status: "draft", 
      dppStandardVersion: MOCK_DPPS[0]?.metadata?.dppStandardVersion || "CIRPASS v1.0 Draft"
    },
    productDetails: {
      description: "The latest smart watch with a focus on sustainability, featuring a recycled aluminum case and energy-efficient display.",
      materials: [
        { name: "Recycled Aluminum (Case)", percentage: 80, isRecycled: true },
        { name: "Organic Polymer (Strap)", percentage: 20 }
      ],
      energyLabel: "A",
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "smart watch wearable",
      customAttributes: [
        { "key": "Display Type", "value": "AMOLED" },
        { "key": "OS", "value": "WearOS" }
      ]
    },
    compliance: { 
        eprel: { status: "N/A", lastChecked: new Date().toISOString() },
        battery_regulation: { 
            status: "not_applicable",
            batteryChemistry: "",
            carbonFootprint: { value: null, unit: ""},
            recycledContent: [],
            stateOfHealth: { value: null, unit: ""}
        } 
    },
    ebsiVerification: { status: "pending_verification", lastChecked: new Date().toISOString() },
    lifecycleEvents: [],
    certifications: [],
    supplyChainLinks: []
  }, null, 2);

  const conceptualUpdateDppRequestBody = JSON.stringify({
    productDetails: {
      description: "The latest smart watch with a focus on sustainability, featuring a recycled aluminum case, energy-efficient display, and enhanced battery life.",
      sustainabilityClaims: [
        { claim: "Made with 80% recycled aluminum", verificationDetails: "Verified by GreenCert" }
      ],
      customAttributes: [
        { "key": "Display Type", "value": "AMOLED" },
        { "key": "OS", "value": "WearOS Pro" },
        { "key": "Water Resistance", "value": "5 ATM" }
      ]
    },
    metadata: {
      status: "pending_review"
    },
    compliance: { // Example update for battery regulation
        battery_regulation: {
            status: "pending",
            batteryPassportId: "BATT-ID-SW-S5-ECO-001",
            carbonFootprint: {
                value: 12.5,
                unit: "kg CO2e/unit",
                calculationMethod: "Product specific LCA"
            },
            recycledContent: [
                { material: "Aluminum", percentage: 80 }
            ]
        }
    }
  }, null, 2);

  const dpp001ForUpdateResponse = MOCK_DPPS.find(dpp => dpp.id === "DPP001") || MOCK_DPPS[0];
  const conceptualUpdateDppResponseBody = JSON.stringify({
    ...dpp001ForUpdateResponse, 
    id: dpp001ForUpdateResponse.id,
    productName: dpp001ForUpdateResponse.productName, 
    productDetails: {
        ...dpp001ForUpdateResponse.productDetails,
        description: "The latest smart watch with a focus on sustainability, featuring a recycled aluminum case, energy-efficient display, and enhanced battery life.", 
        sustainabilityClaims: [ 
          { claim: "Made with 80% recycled aluminum", verificationDetails: "Verified by GreenCert" }
        ],
        customAttributes: [ 
            { "key": "Display Type", "value": "AMOLED" },
            { "key": "OS", "value": "WearOS Pro" },
            { "key": "Water Resistance", "value": "5 ATM" }
        ]
    },
    metadata: {
        ...dpp001ForUpdateResponse.metadata,
        status: "pending_review", 
        last_updated: new Date().toISOString() 
    },
    compliance: {
        ...dpp001ForUpdateResponse.compliance,
        battery_regulation: { 
            status: "pending",
            batteryPassportId: "BATT-ID-SW-S5-ECO-001",
            carbonFootprint: {
                value: 12.5,
                unit: "kg CO2e/unit",
                calculationMethod: "Product specific LCA",
                vcId: "vc:cf:sw-s5-eco:001"
            },
            recycledContent: [
                { material: "Aluminum", percentage: 80, vcId: "vc:rc:aluminum:sw-s5-eco:001" }
            ],
            stateOfHealth: { 
                value: 99,
                unit: "%",
                measurementDate: new Date().toISOString(),
                vcId: "vc:soh:sw-s5-eco:001"
            },
            vcId: "vc:battreg:overall:sw-s5-eco:001"
        }
    }
  }, null, 2);


  const error400_create_dpp = JSON.stringify({
    error: {
      code: 400,
      message: "Invalid request body. 'productName' and 'category' are required for creation.",
      details: [
        { field: "productName", issue: "cannot be empty" },
        { field: "category", issue: "cannot be empty" }
      ]
    }
  }, null, 2);

  const error400_update_dpp = JSON.stringify({
    error: {
      code: 400,
      message: "Invalid request body for update. Field 'metadata.status' has an invalid value 'incorrect_status'.",
      details: [
         { field: "metadata.status", issue: "value must be one of: draft, published, archived, pending_review, revoked, flagged" }
      ]
    }
  }, null, 2);

  const conceptualDeleteDppResponseBody = JSON.stringify({
    message: "Product with ID DPP001 has been archived successfully.",
    status: "Archived"
  }, null, 2);

  const conceptualPatchDppExtendRequestBody = JSON.stringify({
    documentReference: {
      documentName: "Compliance Certificate 2024",
      documentUrl: "https://example.com/certs/compliance_2024.pdf",
      documentType: "Compliance Certificate"
    }
  }, null, 2);

  const dpp001ForPatch = MOCK_DPPS.find(dpp => dpp.id === "DPP001") || MOCK_DPPS[0];
  const conceptualPatchDppExtendResponseBody = JSON.stringify({
    ...dpp001ForPatch,
    documents: [
      ...(dpp001ForPatch.documents || []),
      {
        name: "Compliance Certificate 2024",
        url: "https://example.com/certs/compliance_2024.pdf",
        type: "Compliance Certificate",
        addedTimestamp: new Date().toISOString()
      }
    ],
    metadata: {
      ...(dpp001ForPatch.metadata),
      last_updated: new Date().toISOString()
    }
  }, null, 2);

  const error400_patch_dpp = JSON.stringify({
    error: {
      code: 400,
      message: "Invalid input data. 'documentName', 'documentUrl', and 'documentType' are required for documentReference.",
    }
  }, null, 2);

  const addLifecycleEventRequestBodyExample = JSON.stringify({
    eventType: "Shipped",
    location: "Warehouse B, Hamburg",
    details: { "carrier": "GlobalTrans", "trackingNumber": "GT123456789DE" },
    responsibleParty: "Logistics Inc."
  }, null, 2);

  const addLifecycleEventResponseExample = JSON.stringify({
    id: "evt_mock_123456",
    type: "Shipped",
    timestamp: new Date().toISOString(),
    location: "Warehouse B, Hamburg",
    data: { "carrier": "GlobalTrans", "trackingNumber": "GT123456789DE" },
    responsibleParty: "Logistics Inc."
  }, null, 2);

  const error400_lifecycle_event = JSON.stringify({ error: { code: 400, message: "Field 'eventType' is required and must be a non-empty string." } }, null, 2);

  const dppForComplianceSummary = MOCK_DPPS.find(dpp => dpp.id === "DPP005") || MOCK_DPPS[0]; // DPP005 has battery data
  const conceptualComplianceSummaryResponse = JSON.stringify({
    productId: dppForComplianceSummary.id,
    productName: dppForComplianceSummary.productName,
    overallStatus: "Fully Compliant", 
    eprelStatus: dppForComplianceSummary.compliance.eprel?.status || "N/A",
    ebsiVerificationStatus: dppForComplianceSummary.ebsiVerification?.status || "N/A",
    batteryRegulationStatus: dppForComplianceSummary.compliance.battery_regulation?.status || "N/A",
    esprStatus: dppForComplianceSummary.compliance.eu_espr?.status || (dppForComplianceSummary.compliance.esprConformity?.status ? `${dppForComplianceSummary.compliance.esprConformity.status} (Conformity)` : "N/A"),
    scipStatus: dppForComplianceSummary.compliance.scipNotification?.status || "N/A",
    customsDataStatus: dppForComplianceSummary.compliance.euCustomsData?.status || "N/A",
    lastChecked: new Date().toISOString(),
    details: {
      eprel: dppForComplianceSummary.compliance.eprel,
      ebsi: dppForComplianceSummary.ebsiVerification,
      batteryRegulation: dppForComplianceSummary.compliance.battery_regulation, 
      esprConformity: dppForComplianceSummary.compliance.esprConformity,
      euEspr: dppForComplianceSummary.compliance.eu_espr,
      usScope3: dppForComplianceSummary.compliance.us_scope3,
      scipNotification: dppForComplianceSummary.compliance.scipNotification,
      euCustomsData: dppForComplianceSummary.compliance.euCustomsData,
    }
  }, null, 2);

  const conceptualVerifyDppResponse = JSON.stringify({
    productId: "DPP001",
    verificationStatus: "Verified",
    message: "Product DPP for ID DPP001 integrity and key compliance points (mock) verified successfully.",
    timestamp: new Date().toISOString(),
    checksPerformed: ["Mock Data Integrity Check", "Mock EBSI Anchor Verification"]
  }, null, 2);

  const exampleUpdateOnChainStatusRequestBody = JSON.stringify({ status: "recalled" }, null, 2);
  const exampleUpdateOnChainLifecycleStageRequestBody = JSON.stringify({ lifecycleStage: "Distribution" }, null, 2);
  const exampleLogCriticalEventRequestBody = JSON.stringify({ eventDescription: "Major defect discovered in Batch XYZ.", severity: "High" }, null, 2);
  const exampleRegisterVcHashRequestBody = JSON.stringify({ vcId: "urn:uuid:some-vc-id-123", vcHash: "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2" }, null, 2);
  
  const dppForOnChainOps = MOCK_DPPS.find(dpp => dpp.id === "DPP001") || MOCK_DPPS[0];
  const exampleUpdatedDppResponse = JSON.stringify({ 
    ...dppForOnChainOps,
    metadata: {
        ...dppForOnChainOps.metadata,
        onChainStatus: "recalled", 
        last_updated: new Date().toISOString(),
    },
    lifecycleEvents: [
        ...(dppForOnChainOps.lifecycleEvents || []),
        { id: "evt_onchain_mock", type: "OnChainStatusUpdate", timestamp: new Date().toISOString(), data: { newStatus: "recalled", mockTxHash: "0xmock..."}}
    ]
  }, null, 2);

  const exampleB2BComponentTransferRequestBody = JSON.stringify({
    componentId: "COMP_XYZ_123",
    batchOrSerialNumbers: ["BATCH_A001", "BATCH_A002"],
    quantity: 200,
    unit: "units",
    transferDate: new Date().toISOString(),
    fromParty: {
      participantId: "SUP001",
      participantDid: "did:example:supplier:greenpartsinc",
      role: "Component Supplier"
    },
    toParty: {
      participantId: "MFG002_ASSEMBLY",
      participantDid: "did:example:manufacturer:acmeassembly",
      role: "Pack Assembler"
    },
    transactionDetails: {
      type: "InternalStockTransfer",
      referenceId: "ERP_PO_67890"
    },
    notes: "Transfer of tested battery cells for EV pack assembly."
  }, null, 2);

  const exampleB2BComponentTransferResponseBody = JSON.stringify({
    transferId: "transfer_comp_xyz_123_mock123",
    componentId: "COMP_XYZ_123",
    quantity: 200,
    transferDate: new Date().toISOString(),
    fromParty: { participantId: "SUP001", role: "Supplier" },
    toParty: { participantId: "MFG001", role: "Manufacturer" },
    productId: "DPP001" 
  }, null, 2);

  const exampleGetSupplierAttestationsResponseBody = JSON.stringify([
    {
      attestationId: "attest_sup001_compA_batchXYZ_20240815",
      productId: "DPP001",
      componentId: "COMP_A_BATTERY_CELL",
      supplierId: "SUP001",
      attestationType: "EthicalSourcingCompliance",
      attestationStatement: "Component COMP_A_BATTERY_CELL sourced in compliance with OECD Due Diligence Guidance.",
      issuanceDate: "2024-08-15T10:00:00Z"
    }
  ], null, 2);

  const exampleGetConfidentialMaterialsResponseBody = JSON.stringify({
    confidentialMaterialId: "cm_dpp001_proprietary_alloy_X1",
    productId: "DPP001",
    materialName: "Proprietary Alloy X1-Alpha",
    composition: [{ substanceName: "Titanium", percentageByWeight: "75-78%" }]
  }, null, 2);

  const exampleZkpSubmitRequestBody = JSON.stringify({
    claimType: "material_compliance_svhc_lead_less_0.1",
    proofData: "0xMockProofDataStringForLeadCompliance...",
    publicInputs: { productBatchId: "BATCH_XYZ123", svhcCasNumber: "7439-92-1" }
  }, null, 2);

  const exampleZkpSubmitResponseBody = JSON.stringify({
    dppId: "DPP001",
    proofId: "zkp_proof_mock_abcdef123",
    status: "acknowledged",
    message: "ZKP submission received and queued for conceptual verification.",
    timestamp: new Date().toISOString()
  }, null, 2);

  const exampleZkpVerifyResponseBody = JSON.stringify({
    dppId: "DPP001",
    claimType: "material_compliance_svhc_lead_less_0.1",
    isVerified: true,
    proofId: "zkp_proof_mock_abcdef123",
    verifiedAt: new Date().toISOString(),
    message: "Mock ZKP for claim 'material_compliance_svhc_lead_less_0.1' is considered valid for this DPP."
  }, null, 2);


  return (
    <DocsPageLayout
      pageTitle="API Reference (Conceptual)"
      pageIcon="BookText"
      alertTitle="Conceptual Documentation"
      alertDescription="This API reference is conceptual and outlines how API endpoints for the Norruva DPP platform might be structured. Actual implementation details may vary."
    >
      <ApiReferenceIntro />
      <ApiReferenceDppEndpoints
        exampleListDppsResponse={exampleListDppsResponse}
        exampleDppResponse={exampleDppResponse}
        conceptualCreateDppRequestBody={conceptualCreateDppRequestBody}
        conceptualCreateDppResponseBody={conceptualCreateDppResponseBody}
        conceptualUpdateDppRequestBody={conceptualUpdateDppRequestBody}
        conceptualUpdateDppResponseBody={conceptualUpdateDppResponseBody}
        conceptualDeleteDppResponseBody={conceptualDeleteDppResponseBody}
        conceptualPatchDppExtendRequestBody={conceptualPatchDppExtendRequestBody}
        conceptualPatchDppExtendResponseBody={conceptualPatchDppExtendResponseBody}
        addLifecycleEventRequestBodyExample={addLifecycleEventRequestBodyExample}
        addLifecycleEventResponseExample={addLifecycleEventResponseExample}
        exampleUpdateOnChainStatusRequestBody={exampleUpdateOnChainStatusRequestBody}
        exampleUpdateOnChainLifecycleStageRequestBody={exampleUpdateOnChainLifecycleStageRequestBody}
        exampleLogCriticalEventRequestBody={exampleLogCriticalEventRequestBody}
        exampleRegisterVcHashRequestBody={exampleRegisterVcHashRequestBody}
        exampleUpdatedDppResponse={exampleUpdatedDppResponse}
        error401={error401}
        error404={error404}
        error500={error500}
        error400_create_dpp={error400_create_dpp}
        error400_update_dpp={error400_update_dpp}
        error400_patch_dpp={error400_patch_dpp}
        error400_lifecycle_event={error400_lifecycle_event}
        error400_general={error400_general} 
      />
      <ApiReferenceTokenEndpoints
        mintRequest={mintTokenRequest}
        mintResponse={mintTokenResponse}
        updateRequest={updateTokenRequest}
        updateResponse={updateTokenResponse}
        statusResponse={tokenStatusResponse}
        error401={error401}
        error404={error404}
        error500={error500}
      />
      <ApiReferenceQrEndpoints
        exampleQrValidationResponse={exampleQrValidationResponse}
        error400_qr={error400_qr}
        error401={error401}
        error404={error404}
        error500={error500}
      />
      <ApiReferenceComplianceEndpoints
        conceptualComplianceSummaryResponse={conceptualComplianceSummaryResponse}
        conceptualVerifyDppResponse={conceptualVerifyDppResponse}
        error401={error401}
        error404={error404}
        error500={error500}
      />
      <ApiReferencePrivateLayerEndpoints
        exampleB2BComponentTransferRequestBody={exampleB2BComponentTransferRequestBody}
        exampleB2BComponentTransferResponseBody={exampleB2BComponentTransferResponseBody}
        exampleGetSupplierAttestationsResponseBody={exampleGetSupplierAttestationsResponseBody}
        exampleGetConfidentialMaterialsResponseBody={exampleGetConfidentialMaterialsResponseBody}
        error400General={error400_general}
        error401={error401}
        error404={error404}
        error500={error500}
      />
      <ApiReferenceZkpLayerEndpoints
        exampleZkpSubmitRequestBody={exampleZkpSubmitRequestBody}
        exampleZkpSubmitResponseBody={exampleZkpSubmitResponseBody}
        exampleZkpVerifyResponseBody={exampleZkpVerifyResponseBody}
        error400General={error400_general}
        error401={error401}
        error404={error404}
        error500={error500}
      />
    </DocsPageLayout>
  );
}


