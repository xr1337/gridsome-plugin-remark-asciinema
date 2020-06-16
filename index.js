const visit = require("unist-util-visit");

const urlRegexp = /https:\/\/asciinema\.org\/a\/([A-Za-z0-9-_]*)\.js/i;

const isAsciinemaLink = node => {
  return (
    node.children.length === 1 &&
    node.children[0].type === "link" &&
    (urlRegexp.exec(node.children[0].url))
  );
};

module.exports = options => {
  return async tree => {
    const nodes = [];
    visit(tree, "paragraph", node => {
      const tagId = isAsciinemaLink(node)
      if (tagId) {
        nodes.push([node, tagId[1],node.children[0].url ]);
      }
    });

    for (let i = 0; i < nodes.length; i++) {
      const nt = nodes[i];
      const node = nt[0];
      const asciinemaID = nt[1];
      const asciinemaLink = nt[2];
      try {
        node.type = "html";
        node.value = `<script id="asciicast-${asciinemaID}" src="${asciinemaLink}" async></script>`;
      } catch (err) {
      }
    }
  };
};
