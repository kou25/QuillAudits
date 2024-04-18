export const listofIssues = [
  {
    id: "1",
    color: "bg-blue-500",
    count: "446",
    text: "Total Issues Found",
    issues: Array.from({ length: 446 }, (_, i) => ({
      id: i,
      title: `#${i + 1}. Lorem ipsum dolor sit ame`,
      description:
        "Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua.",
      remediation:
        "Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua."
    }))
  },
  {
    id: "2",
    color: "bg-red-500",
    count: "108",
    text: "High Severity Issues",
    issues: Array.from({ length: 108 }, (_, i) => ({
      id: i,
      title: `#${i + 1}. Lorem ipsum dolor sit ame`,
      description:
        "Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua.",
      remediation:
        "Lorem ipsum dolor sit amet, consec ascing elit, sed do eiusmod tpor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, is nostrud exercitation ullamco lris nisi ut aliquip. Consectetur adiiscing elit, se do eiusmod tempor indidut ut lbore et ore magna aliqua. om ipsum dolor sit amet ectr ig elit, sed do eiusmod tempor ididunt utio labore et dolore magna aliqua."
    }))
  },
  {
    id: "3",
    color: "bg-yellow-500",
    count: "143",
    text: "Medium Severity Issues",
    issues: Array.from({ length: 143 }, (_, i) => ({
      id: i,
      title: `#${i + 1}. Lorem ipsum dolor sit ame`,
      description: "Description for medium severity issue",
      remediation: "Remediation for medium severity issue"
    }))
  },
  {
    id: "4",
    color: "bg-green-500",
    count: "00",
    text: "Low Severity Issues",
    issues: []
  },
  {
    id: "5",
    color: "bg-indigo-500",
    count: "68",
    text: "Informational Issues",
    issues: Array.from({ length: 68 }, (_, i) => ({
      id: i,
      title: `#${i + 1}. Lorem ipsum dolor sit ame`,
      description: "Description for informational issue",
      remediation: "Remediation for informational issue"
    }))
  },
  {
    id: "6",
    color: "bg-sky-300",
    count: "127",
    text: "Optimisation Issues",
    issues: Array.from({ length: 127 }, (_, i) => ({
      id: i,
      title: `#${i + 1}. Lorem ipsum dolor sit ame`,
      description: "Description for optimization issue",
      remediation: "Remediation for optimization issue"
    }))
  }
];
