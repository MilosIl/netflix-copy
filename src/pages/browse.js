import { BrowseContainer } from "../Containers/browse";
import { useContent } from "../Hooks";
import { selectionFilter } from "../Utils";

export default function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = selectionFilter({ series, films });

  return <BrowseContainer slides={slides} />;
}
