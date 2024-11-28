

/**
 * LLMToggle component allows users to toggle the use of an LLM engine for additional inference results.
 * It displays a toolbar item with an icon indicating whether the LLM engine is currently in use.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function CompleteIncomplete({ caption, hasBorder, variant, isPrimary }: { caption: string, hasBorder: boolean, variant: "contained" | "outlined", isPrimary: boolean }) {

  console.log('active', active)

  return <div  >
   {active ? 'Complete' : 'Incomplete'}
  </div>
}
