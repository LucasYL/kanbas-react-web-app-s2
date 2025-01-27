import Anchor from "./Anchor";
import Forms from "./Forms";
import Images from "./Images";
import List from "./List";
import Paragraph from "./Paragraph";
import Tables from "./Tables";


export default function Lab1() {
    return (
      <div id="wd-lab1">
        <h2>Lab 1</h2>
        <h3>HTML Examples</h3>
        <div id="wd-lab1">
      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
        ...
      </div>
      <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-1"> ... </p>

This is the first paragraph. The paragraph tag is used to format
vertical gaps between long pieces of text like this one.

This is the second paragraph. Even though there is a deliberate white
gap between the paragraph above and this paragraph, by default
browsers render them as one contiguous piece of text as shown here on
the right.

This is the third paragraph. Wrap each paragraph with the paragraph
tag to tell browsers to render the gaps.

      </div>
      </div>
      <Paragraph />
      <List />
      <Tables />
      <Images />
      <Forms />
      <Anchor />
      </div>
    );
  }
  