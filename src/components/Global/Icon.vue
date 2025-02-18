<script setup>
const props = defineProps(['name'])
</script>

<template>
  <svg v-if="props.name == 'la:sync'" width="22" height="22" viewBox="0 0 32 32">
    <path fill="currentColor"
      d="M16 4c-5.113 0-9.383 3.16-11.125 7.625l1.844.75C8.176 8.641 11.71 6 16 6c3.242 0 6.133 1.59 7.938 4H20v2h7V5h-2v3.094A11.938 11.938 0 0 0 16 4zm9.281 15.625C23.824 23.359 20.29 26 16 26c-3.277 0-6.156-1.613-7.969-4H12v-2H5v7h2v-3.094C9.188 26.386 12.395 28 16 28c5.113 0 9.383-3.16 11.125-7.625z" />
  </svg>

  <svg v-else-if="props.name == 'hugeicons:truck-delivery'" width="32" height="32" viewBox="0 0 24 24">
    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
      color="currentColor">
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
      <path
        d="M5 17.972c-1.097-.054-1.78-.217-2.268-.704s-.65-1.171-.704-2.268M9 18h6m4-.028c1.097-.054 1.78-.217 2.268-.704C22 16.535 22 15.357 22 13v-2h-4.7c-.745 0-1.117 0-1.418-.098a2 2 0 0 1-1.284-1.284C14.5 9.317 14.5 8.945 14.5 8.2c0-1.117 0-1.675-.147-2.127a3 3 0 0 0-1.926-1.926C11.975 4 11.417 4 10.3 4H2m0 4h6m-6 3h4" />
      <path d="M14.5 6h1.821c1.456 0 2.183 0 2.775.354c.593.353.938.994 1.628 2.276L22 11" />
    </g>
  </svg>
  <!-- INICIO -->
  <svg v-else-if="props.name == 'material-symbols:home'" width="32" height="32" viewBox="0 0 24 24">
    <path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7H4Z" />
  </svg>

  <svg v-else-if="props.name == 'tabler:building-store'" width="32" height="32" viewBox="0 0 24 24">
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      d="M3 21h18M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4M5 21V10.85M19 21V10.85M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
  </svg>

  <svg v-else-if="props.name == 'mdi:truck-outline'" width="32" height="32" viewBox="0 0 24 24">
    <path fill="currentColor"
      d="M18 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m1.5-9H17V12h4.46L19.5 9.5M6 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3H9c0 1.66-1.34 3-3 3s-3-1.34-3-3H1V6c0-1.11.89-2 2-2h14v4h3M3 6v9h.76c.55-.61 1.35-1 2.24-1c.89 0 1.69.39 2.24 1H15V6H3Z" />
  </svg>
  <!-- group fornecedores -->
  <svg v-else-if="props.name == 'material-symbols:groups-3'" width="32" height="32" viewBox="0 0 24 24">
    <path fill="currentColor"
      d="M4 13.525L6.525 11L4 8.475L1.475 11L4 13.525ZM17.5 13L20 9l2.5 4h-5ZM12 12q-1.25 0-2.125-.875T9 9q0-1.275.875-2.138T12 6q1.275 0 2.138.863T15 9q0 1.25-.863 2.125T12 12ZM0 18v-1.575q0-1.1 1.113-1.763T4 14q.325 0 .625.013t.575.062q-.35.5-.525 1.075T4.5 16.375V18H0Zm6 0v-1.625q0-1.625 1.663-2.625t4.337-1q2.7 0 4.35 1T18 16.375V18H6Zm14-4q1.8 0 2.9.663t1.1 1.762V18h-4.5v-1.625q0-.65-.163-1.225t-.487-1.075q.275-.05.563-.062T20 14Z" />
  </svg>
  <svg v-else-if="props.name == 'solar:document-add-bold'" width="32" height="32" viewBox="0 0 24 24">
    <g fill="currentColor">
      <path
        d="M16.519 16.501c.175-.136.334-.295.651-.612l3.957-3.958c.096-.095.052-.26-.075-.305a4.332 4.332 0 0 1-1.644-1.034a4.332 4.332 0 0 1-1.034-1.644c-.045-.127-.21-.171-.305-.075L14.11 12.83c-.317.317-.476.476-.612.651c-.161.207-.3.43-.412.666c-.095.2-.166.414-.308.84l-.184.55l-.292.875l-.273.82a.584.584 0 0 0 .738.738l.82-.273l.875-.292l.55-.184c.426-.142.64-.212.84-.308c.236-.113.46-.25.666-.412Zm5.847-5.809a2.163 2.163 0 1 0-3.058-3.059l-.127.128a.524.524 0 0 0-.148.465c.02.107.055.265.12.452c.13.375.376.867.839 1.33a3.5 3.5 0 0 0 1.33.839c.188.065.345.1.452.12a.525.525 0 0 0 .465-.148l.127-.127Z" />
      <path fill-rule="evenodd"
        d="M4.172 3.172C3 4.343 3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828C5.343 22 7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172C20.981 19.676 21 17.832 21 14.18l-2.818 2.818c-.27.27-.491.491-.74.686a5.107 5.107 0 0 1-.944.583a8.163 8.163 0 0 1-.944.355l-2.312.771a2.083 2.083 0 0 1-2.635-2.635l.274-.82l.475-1.426l.021-.066c.121-.362.22-.658.356-.944c.16-.335.355-.651.583-.943c.195-.25.416-.47.686-.74l4.006-4.007L18.12 6.7l.127-.127A3.651 3.651 0 0 1 20.838 5.5c-.151-1.03-.444-1.763-1.01-2.328C18.657 2 16.771 2 13 2h-2C7.229 2 5.343 2 4.172 3.172ZM7.25 9A.75.75 0 0 1 8 8.25h6.5a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9Zm0 4a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z"
        clip-rule="evenodd" />
    </g>
  </svg>
  <svg v-else-if="props.name == 'uis:angle-down'" width="32" height="32" viewBox="0 0 24 24">
    <path fill="currentColor"
      d="M16.9 9.2c-.4-.4-1-.4-1.4 0L12 12.7L8.5 9.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l4.2 4.2c.2.2.4.3.7.3c.3 0 .5-.1.7-.3l4.2-4.2c.4-.4.4-1 0-1.4z" />
  </svg>
  <svg v-else-if="props.name == 'ic:outline-search'" width="32" height="32" viewBox="0 0 24 24">
    <path fill="currentColor"
      d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z" />
  </svg>
  <!-- CONFIGURAÇÕES -->
  <svg v-else-if="props.name == 'material-symbols-light:settings-outline-rounded'" width="32" height="32"
    viewBox="0 0 24 24">
    <path fill="currentColor"
      d="M10.96 21q-.348 0-.605-.229t-.318-.571l-.264-2.092q-.479-.145-1.035-.454q-.557-.31-.948-.664l-1.915.823q-.317.14-.644.031q-.327-.11-.504-.415L3.648 15.57q-.177-.306-.104-.638q.073-.333.348-.546l1.671-1.25q-.044-.272-.073-.56q-.028-.287-.028-.558q0-.252.028-.53t.073-.626l-1.67-1.25q-.276-.213-.34-.555q-.063-.343.114-.648l1.06-1.8q.177-.287.504-.406q.327-.12.644.021l1.896.804q.448-.373.97-.673q.52-.3 1.013-.464l.283-2.092q.061-.342.318-.571T10.96 3h2.08q.348 0 .605.229t.318.571l.264 2.112q.575.201 1.016.463q.442.262.909.654l1.992-.804q.318-.14.644-.021q.327.12.504.406l1.06 1.819q.177.306.104.638q-.073.333-.348.546l-1.748 1.308q.082.31.092.568q.01.26.01.511q0 .233-.02.491q-.019.259-.088.626l1.69 1.27q.275.213.358.546q.083.332-.094.638l-1.066 1.839q-.177.305-.513.415q-.337.11-.654-.03l-1.923-.824q-.467.392-.94.673q-.474.281-.985.444l-.264 2.112q-.061.342-.318.571T13.04 21zm.04-1h1.956l.369-2.708q.756-.2 1.36-.549q.605-.349 1.232-.956l2.495 1.063l.994-1.7l-2.189-1.644q.125-.427.166-.786q.04-.358.04-.72q0-.38-.04-.72q-.04-.34-.166-.747l2.227-1.683l-.994-1.7l-2.552 1.07q-.454-.499-1.193-.934t-1.4-.578L13 4h-1.994l-.312 2.688q-.756.162-1.39.52q-.633.36-1.26.986L5.55 7.15l-.994 1.7l2.169 1.62q-.125.336-.175.73q-.05.394-.05.82q0 .38.05.755t.156.73l-2.15 1.645l.994 1.7l2.475-1.05q.588.594 1.222.953t1.428.559zm.973-5.5q1.046 0 1.773-.727q.727-.727.727-1.773q0-1.046-.727-1.773q-.727-.727-1.773-.727q-1.052 0-1.776.727T9.473 12q0 1.046.724 1.773q.724.727 1.776.727M12 12" />
  </svg>
  <svg v-else-if="props.name == 'mdi:filter-check'" width="32" height="32" viewBox="0 0 24 24">
    <path fill="currentColor"
      d="M12 12v7.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0L8.29 18.7a.989.989 0 0 1-.29-.83V12h-.03L2.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L12.03 12H12m5.75 9L15 18l1.16-1.16l1.59 1.59l3.59-3.59l1.16 1.41L17.75 21" />
  </svg>
  <svg v-else-if="props.name == 'mdi:filter'" width="32" height="32" viewBox="0 0 24 24">
    <path fill="currentColor"
      d="M14 12v7.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0l-2.01-2.01a.989.989 0 0 1-.29-.83V12h-.03L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L14.03 12H14Z" />
  </svg>
  <svg v-else-if="props.name == 'charm:menu-kebab'" width="32" height="32" viewBox="0 0 16 16">
    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
      <circle cx="8" cy="2.5" r=".75" />
      <circle cx="8" cy="8" r=".75" />
      <circle cx="8" cy="13.5" r=".75" />
    </g>
  </svg>
  <svg v-else-if="props.name == 'zondicons:menu'" width="32" height="32" viewBox="0 0 20 20">
    <path fill="currentColor" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
  <!-- LIXEIRA UNICA -->
  <svg v-else-if="props.name == 'material-symbols-light:delete-outline-sharp'" width="32" height="32"
    viewBox="0 0 24 24">
    <path fill="currentColor"
      d="M6 20V6H5V5h4v-.77h6V5h4v1h-1v14zm1-1h10V6H7zm2.808-2h1V8h-1zm3.384 0h1V8h-1zM7 6v13z" />
  </svg>
  <svg v-else-if="props.name == 'ci:close-lg'" width="32" height="32" viewBox="0 0 24 24">
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      d="m21 21l-9-9m0 0L3 3m9 9l9-9m-9 9l-9 9" />
  </svg>

   <!-- Details -->
   <svg v-else-if="props.name == 'tabler:list-details'" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5h8m-8 4h5m-5 6h8m-8 4h5M3 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm0 10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/></svg>

  <!-- localization -->
   <svg v-else-if="props.name == 'material-symbols:location-on-rounded'" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21.325q-.35 0-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762t-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 1.125-.437 2.363t-1.275 2.575T16.2 17.9t-2.875 2.925q-.275.25-.625.375t-.7.125M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12"/></svg>
 <!-- Notas -->
 <svg v-else-if="props.name == 'ic:round-speaker-notes-off'" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M1.91 2.36c-.35-.35-.92-.35-1.27 0s-.35.92 0 1.27l1.38 1.38L2 22l4-4h9l5.09 5.09c.35.35.92.35 1.27 0s.35-.92 0-1.27L1.91 2.36zM7 14c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm13-9H4.08l7 7H17c.55 0 1 .45 1 1s-.45 1-1 1h-3.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2zm-3 6h-6c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1z"/></svg>
  <!-- DATA -->
  <svg v-else-if="props.name == 'ri:database-2-fill'" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M21 9.5v3c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5v-3c0 2.485 4.03 4.5 9 4.5s9-2.015 9-4.5m-18 5c0 2.485 4.03 4.5 9 4.5s9-2.015 9-4.5v3c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5zm9-2.5c-4.97 0-9-2.015-9-4.5S7.03 3 12 3s9 2.015 9 4.5s-4.03 4.5-9 4.5"/></svg>

  <!-- NOTAS -->
  <svg v-else-if="props.name == 'material-symbols:apk-document-rounded'" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7 19h10q-.1-1.225-.75-2.25t-1.7-1.625l.95-1.7q.05-.1.025-.225t-.15-.175q-.1-.05-.213-.025t-.162.125l-.975 1.75q-.5-.2-1-.312T12 14.45t-1.025.113t-1 .312L9 13.125Q8.95 13 8.838 13t-.238.05l-.1.375l.95 1.7q-1.05.6-1.7 1.625T7 19m2.75-1.5q-.2 0-.35-.15T9.25 17t.15-.35t.35-.15t.35.15t.15.35t-.15.35t-.35.15m4.5 0q-.2 0-.35-.15t-.15-.35t.15-.35t.35-.15t.35.15t.15.35t-.15.35t-.35.15M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h7.175q.4 0 .763.15t.637.425l4.85 4.85q.275.275.425.638t.15.762V20q0 .825-.587 1.413T18 22zm7-14q0 .425.288.713T14 9h4l-5-5z"/></svg>
  
  <!-- load animado -->
  <svg v-else-if="props.name == 'svg-spinners:3-dots-fade'" width="18" height="18" viewBox="0 0 24 24"><circle cx="4" cy="12" r="3" fill="currentColor"><animate id="svgSpinners3DotsFade0" fill="freeze" attributeName="opacity" begin="0;svgSpinners3DotsFade1.end-0.25s" dur="0.75s" values="1;.2"/></circle><circle cx="12" cy="12" r="3" fill="currentColor" opacity=".4"><animate fill="freeze" attributeName="opacity" begin="svgSpinners3DotsFade0.begin+0.15s" dur="0.75s" values="1;.2"/></circle><circle cx="20" cy="12" r="3" fill="currentColor" opacity=".3"><animate id="svgSpinners3DotsFade1" fill="freeze" attributeName="opacity" begin="svgSpinners3DotsFade0.begin+0.3s" dur="0.75s" values="1;.2"/></circle></svg>
  <!-- nuxt icon -->
  <svg v-else-if="props.name == 'lineicons:nuxt'"  width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M13.2 18.666h7.4c.236 0 .462-.083.667-.2c.204-.117.415-.264.533-.466c.118-.203.2-.433.2-.667s-.082-.464-.2-.667l-5-8.6a1.2 1.2 0 0 0-.467-.466a1.6 1.6 0 0 0-.733-.2c-.236 0-.462.083-.667.2a1.2 1.2 0 0 0-.466.466l-1.267 2.2L10.667 6c-.118-.203-.262-.417-.467-.534s-.43-.133-.667-.133c-.236 0-.462.016-.666.133s-.416.33-.534.534l-6.2 10.666c-.118.203-.133.433-.133.667s.015.464.133.667c.118.202.33.35.534.466s.43.2.666.2H8c1.85 0 3.195-.83 4.133-2.4l2.267-3.933l1.2-2.067l3.667 6.267H14.4zm-5.267-2.133H4.667l4.866-8.4l2.467 4.2l-1.634 2.848c-.623 1.02-1.333 1.352-2.433 1.352"/></svg>

  <!-- github -->
  <svg v-else-if="props.name == 'mdi:github'" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
  <!-- github animado -->
  <svg v-else-if="props.name == 'line-md:github-loop'" width="24" height="24" viewBox="0 0 24 24"><mask id="lineMdGithubLoop0" width="24" height="24" x="0" y="0"><g fill="#fff"><ellipse cx="9.5" cy="9" rx="1.5" ry="1"/><ellipse cx="14.5" cy="9" rx="1.5" ry="1"/></g></mask><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="32" stroke-dashoffset="32" d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0"/></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"><animate attributeName="d" dur="3s" repeatCount="indefinite" values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="10;0"/></path></g><rect width="8" height="4" x="8" y="11" fill="currentColor" mask="url(#lineMdGithubLoop0)"><animate attributeName="y" dur="10s" keyTimes="0;0.45;0.46;0.54;0.55;1" repeatCount="indefinite" values="11;11;7;7;11;11"/></rect></svg>
  <!-- linkdin -->
  <svg v-else-if="props.name == 'ri:linkedin-fill'" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"/></svg>
  <!-- INSTRAGRAM -->
  <svg v-else-if="props.name == 'line-md:instagram'" width="24" height="24" viewBox="0 0 24 24"><circle cx="17" cy="7" r="1.5" fill="currentColor" fill-opacity="0"><animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.15s" values="0;1"/></circle><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="72" stroke-dashoffset="72" d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"/></path><path stroke-dasharray="28" stroke-dashoffset="28" d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.6s" values="28;0"/></path></g></svg>
</template>

