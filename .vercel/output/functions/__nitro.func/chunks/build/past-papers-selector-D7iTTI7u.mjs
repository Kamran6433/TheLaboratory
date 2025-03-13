import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0 } from './CallToAction-KwccuGOk.mjs';
import { useSSRContext, computed, mergeProps, withCtx, createVNode, unref, ref, reactive, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { _ as _export_sfc, V as VContainer, P as VBtnToggle, t as VBtn, e as VRow, f as VCol, j as VCard, k as VCardText, Q as VChipGroup, R as VChip, y as VExpansionPanels, z as VExpansionPanel, A as VExpansionPanelTitle, B as VExpansionPanelText } from './server.mjs';
import { F as FAQ } from './FAQ-C9-s_t0y.mjs';
import { u as useUserStore } from './user-WKIwKJhJ.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'lru-cache';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'xss';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'hast-util-to-string';
import 'github-slugger';
import 'node:url';
import 'ipx';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './logo-Bfw0K8zp.mjs';
import 'pinia-plugin-persistedstate';
import 'idb';
import 'tslib';
import 'undici';
import 'util';
import 'crypto';
import '@grpc/grpc-js';
import '@grpc/proto-loader';

const _imports_0 = "" + buildAssetsURL("Saly-16.13hJk_OW.png");
const gcseSubjects = {
  Biology: [{
    name: "GCSEs",
    examBoards: [{
      name: "AQA",
      papers: ["Paper 1", "Paper 2"]
    }, {
      name: "Edexcel",
      papers: ["Paper 1", "Paper 2"]
    }, {
      name: "OCR A (Gateway)",
      papers: ["Paper 1", "Paper 2", "Paper 3", "Paper 4"]
    }, {
      name: "OCR B (21st Century)",
      papers: ["Paper 1", "Paper 2", "Paper 3", "Paper 4"]
    }, {
      name: "Eduqas",
      papers: ["Component 1", "Component 2"]
    }, {
      name: "WJEC",
      papers: ["Unit 1", "Unit 2", "Unit 3"]
    }]
  }, {
    name: "IGCSEs",
    examBoards: [{
      name: "CAIE",
      papers: ["Paper 1", "Paper 2", "Paper 3", "Paper 4", "Paper 5", "Paper 6"]
    }, {
      name: "Edexcel",
      papers: ["Paper 1", "Paper 2"]
    }]
  }, {
    name: "Legacy",
    examBoards: [{
      name: "AQA",
      papers: ["Unit 1", "Unit 2", "Unit 3"]
    }, {
      name: "Edexcel",
      papers: ["Unit 1", "Unit 2", "Unit 3"]
    }, {
      name: "OCR A (21st Century)",
      papers: ["Unit 1", "Unit 2", "Unit 3"]
    }, {
      name: "OCR B (Gateway)",
      papers: ["Unit 1", "Unit 2"]
    }, {
      name: "WJEC",
      papers: ["Unit 1", "Unit 2", "Unit 3"]
    }]
  }],
  Chemistry: [{
    name: "GCSEs",
    examBoards: [{
      name: "AQA",
      papers: ["Paper 1", "Paper 2"]
    }, {
      name: "Edexcel",
      papers: ["Paper 1", "Paper 2"]
    }, {
      name: "OCR A (Gateway)",
      papers: ["Paper 1", "Paper 2", "Paper 3", "Paper 4"]
    }, {
      name: "OCR B (21st Century)",
      papers: ["Paper 1", "Paper 2", "Paper 3", "Paper 4"]
    }, {
      name: "Eduqas",
      papers: ["Component 1", "Component 2"]
    }, {
      name: "WJEC",
      papers: ["Unit 1", "Unit 2", "Unit 3"]
    }]
  }, {
    name: "IGCSEs",
    examBoards: [{
      name: "CAIE",
      papers: ["Paper 1", "Paper 2", "Paper 3", "Paper 4", "Paper 5", "Paper 6"]
    }, {
      name: "Edexcel",
      papers: ["Paper 1", "Paper 2"]
    }]
  }, {
    name: "Legacy",
    examBoards: [{
      name: "AQA",
      papers: ["Unit 1", "Unit 2", "Unit 3"]
    }, {
      name: "Edexcel",
      papers: ["Unit 1", "Unit 2", "Unit 3"]
    }, {
      name: "OCR A (21st Century)",
      papers: ["Unit 1", "Unit 2", "Unit 3"]
    }, {
      name: "OCR B (Gateway)",
      papers: ["Unit 1", "Unit 2"]
    }, {
      name: "WJEC",
      papers: ["Unit 1", "Unit 2", "Unit 3"]
    }]
  }],
  Physics: [{
    name: "GCSEs",
    examBoards: [{
      name: "AQA",
      papers: ["Paper 1", "Paper 2"]
    }, {
      name: "Edexcel",
      papers: ["Paper 1", "Paper 2"]
    }, {
      name: "OCR A (Gateway)",
      papers: ["Paper 1", "Paper 2", "Paper 3", "Paper 4"]
    }, {
      name: "OCR B (21st Century)",
      papers: ["Paper 1", "Paper 2", "Paper 3", "Paper 4"]
    }, {
      name: "Eduqas",
      papers: ["Component 1", "Component 2"]
    }, {
      name: "WJEC",
      papers: ["Unit 1", "Unit 2", "Unit 3"]
    }]
  }, {
    name: "IGCSEs",
    examBoards: [{
      name: "CAIE",
      papers: ["Paper 1", "Paper 2", "Paper 3", "Paper 4", "Paper 5", "Paper 6"]
    }, {
      name: "Edexcel",
      papers: ["Paper 1", "Paper 2"]
    }]
  }, {
    name: "Legacy",
    examBoards: [{
      name: "AQA",
      papers: ["Unit 1", "Unit 2", "Unit 3"]
    }, {
      name: "Edexcel",
      papers: ["Unit 1", "Unit 2", "Unit 3"]
    }, {
      name: "OCR A (21st Century)",
      papers: ["Unit 1", "Unit 2", "Unit 3"]
    }, {
      name: "OCR B (Gateway)",
      papers: ["Unit 1", "Unit 2"]
    }, {
      name: "WJEC",
      papers: ["Unit 1", "Unit 2", "Unit 3"]
    }]
  }],
  "Combined Science": [{
    name: "GCSEs",
    examBoards: [{
      name: "AQA",
      papers: ["Biology 1", "Biology 2", "Chemistry 1", "Chemistry 2", "Physics 1", "Physics 2"]
    }, {
      name: "Edexcel",
      papers: ["Biology 1", "Biology 2", "Chemistry 1", "Chemistry 2", "Physics 1", "Physics 2"]
    }, {
      name: "OCR A (Gateway)",
      papers: ["Paper 1 Biology (Foundation)", "Paper 2 Biology (Foundation)", "Paper 3 Chemistry (Foundation)", "Paper 4 Chemistry (Foundation)", "Paper 5 Physics (Foundation)", "Paper 6 Physics (Foundation)", "Paper 7 Biology (Foundation)", "Paper 8 Biology (Foundation)", "Paper 9 Chemistry (Foundation)", "Paper 10 Chemistry (Foundation)", "Paper 11 Physics (Foundation)", "Paper 12 Physics (Foundation)"]
    }, {
      name: "OCR B (21st Century)",
      papers: ["Paper 1", "Paper 2", "Paper 3", "Paper 4", "Paper 5", "Paper 6", "Paper 7", "Paper 8"]
    }, {
      name: "Eduqas",
      papers: ["Component 1", "Component 2", "Component 3", "Component 4"]
    }, {
      name: "WJEC",
      papers: ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6", "Unit 7"]
    }]
  }, {
    name: "IGCSEs",
    examBoards: [{
      name: "CAIE",
      papers: ["Paper 1", "Paper 2", "Paper 3", "Paper 4", "Paper 5", "Paper 6"]
    }, {
      name: "Edexcel",
      papers: ["Paper 1 Biology", "Paper 1 Chemistry", "Paper 1 Physics"]
    }]
  }, {
    name: "Legacy",
    examBoards: [{
      name: "AQA",
      papers: ["Unit 1 Biology", "Unit 2 Biology", "Unit 3 Biology", "Unit 1 Chemistry", "Unit 2 Chemistry", "Unit 3 Chemistry", "Unit 1 Physics", "Unit 2 Physics", "Unit 3 Physics"]
    }, {
      name: "Edexcel",
      papers: ["Unit 1 Biology", "Unit 2 Biology", "Unit 3 Biology", "Unit 1 Chemistry", "Unit 2 Chemistry", "Unit 3 Chemistry", "Unit 1 Physics", "Unit 2 Physics", "Unit 3 Physics"]
    }, {
      name: "OCR A (21st Century)",
      papers: ["Unit 1 Biology", "Unit 2 Biology", "Unit 3 Biology", "Unit 1 Chemistry", "Unit 2 Chemistry", "Unit 3 Chemistry", "Unit 1 Physics", "Unit 2 Physics", "Unit 3 Physics"]
    }, {
      name: "OCR B (Gateway)",
      papers: ["Unit 1", "Unit 2", "Unit 3", "Unit 4"]
    }, {
      name: "WJEC",
      papers: ["Unit 1 Biology", "Unit 2 Biology", "Unit 3 Biology", "Unit 1 Chemistry", "Unit 2 Chemistry", "Unit 3 Chemistry", "Unit 1 Physics", "Unit 2 Physics", "Unit 3 Physics"]
    }]
  }],
  "Computer Science": [{
    name: "GCSEs",
    examBoards: [{
      name: "AQA",
      papers: ["Paper 1", "Paper 2"]
    }, {
      name: "Edexcel",
      papers: ["Paper 1", "Paper 2"]
    }, {
      name: "OCR",
      papers: ["Paper 1", "Paper 2"]
    }, {
      name: "Eduqas",
      papers: ["Component 1", "Component 2"]
    }, {
      name: "WJEC",
      papers: ["Unit 1", "Unit 2", "Unit 3"]
    }]
  }, {
    name: "IGCSEs",
    examBoards: [{
      name: "CAIE",
      papers: ["Paper 1", "Paper 2"]
    }, {
      name: "Edexcel",
      papers: ["Paper 1", "Paper 2"]
    }]
  }],
  Maths: [{
    name: "GCSEs & IGCSEs",
    examBoards: [{
      name: "AQA",
      papers: ["Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "AQA Further",
      papers: ["Paper 1", "Paper 2"]
    }, {
      name: "CAIE",
      papers: ["Paper 1", "Paper 2", "Paper 3", "Paper 4"]
    }, {
      name: "CAIE Further",
      papers: ["Paper 1", "Paper 2"]
    }, {
      name: "Edexcel GCSE",
      papers: ["Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "Edexcel IGCSE A",
      papers: ["Paper 1", "Paper 2"]
    }, {
      name: "Edexcel IGSCE B",
      papers: ["Paper 1", "Paper 2"]
    }, {
      name: "Edexcel Further",
      papers: ["Paper 1", "Paper 2"]
    }, {
      name: "OCR",
      papers: ["Paper 1", "Paper 2", "Paper 3", "Paper 4", "Paper 5", "Paper 6"]
    }, {
      name: "Eduqas",
      papers: ["Component 1", "Component 2"]
    }, {
      name: "WJEC",
      papers: ["Unit 1", "Unit 2"]
    }]
  }, {
    name: "Legacy",
    examBoards: [{
      name: "AQA Maths A",
      papers: ["Unit 1", "Unit 2", "Unit 3"]
    }, {
      name: "AQA Maths B",
      papers: ["Paper 1", "Paper 2"]
    }, {
      name: "Edexcel Maths A",
      papers: ["Paper 1", "Paper 2"]
    }, {
      name: "Edexcel Maths B",
      papers: ["Unit 1", "Unit 2", "Unit 3"]
    }, {
      name: "OCR Maths A",
      papers: ["Unit 1", "Unit 2", "Unit 3"]
    }, {
      name: "OCR Maths B",
      papers: ["Paper 1", "Paper 2", "Paper 3", "Paper 4"]
    }]
  }],
  "English Language": [{
    name: "GCSEs & IGCSEs",
    examBoards: [{
      name: "AQA",
      papers: ["Paper 1", "Paper 2"]
    }, {
      name: "CAIE",
      papers: ["Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "Edexcel GCSE",
      papers: ["Paper 1", "Paper 2"]
    }, {
      name: "Edexcel IGCSE A",
      papers: ["Paper 1", "Paper 2"]
    }, {
      name: "Edexcel IGSCE B",
      papers: ["Paper 1"]
    }, {
      name: "OCR",
      papers: ["Component 1", "Component 2"]
    }, {
      name: "Eduqas",
      papers: ["Component 1", "Component 2"]
    }, {
      name: "WJEC",
      papers: ["Unit 1", "Unit 2", "Unit 3"]
    }]
  }],
  "English Literature": [{
    name: "GCSEs/IGCSEs",
    examBoards: [{
      name: "AQA",
      papers: ["Paper 1", "Paper 2"]
    }, {
      name: "CAIE",
      papers: ["Paper 1", "Paper 2", "Paper 3", "Paper 4"]
    }, {
      name: "Edexcel GCSE",
      papers: ["Paper 1", "Paper 2"]
    }, {
      name: "Edexcel IGCSE",
      papers: ["Paper 1", "Paper 2"]
    }, {
      name: "OCR",
      papers: ["Component 1", "Component 2"]
    }, {
      name: "Eduqas",
      papers: ["Component 1", "Component 2"]
    }, {
      name: "WJEC",
      papers: ["Unit 1", "Unit 2A", "Unit 2B"]
    }]
  }],
  Economics: [{
    name: "GCSEs & IGCSEs",
    examBoards: [{
      name: "AQA",
      papers: ["Paper 1", "Paper 2"]
    }, {
      name: "CAIE",
      papers: ["Paper 1", "Paper 2"]
    }, {
      name: "Edexcel IGCSE",
      papers: ["Paper 1", "Paper 2"]
    }, {
      name: "OCR",
      papers: ["Component 1", "Component 2"]
    }]
  }],
  Geography: [{
    name: "GCSEs & IGCSEs",
    examBoards: [{
      name: "AQA",
      papers: ["Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "CAIE",
      papers: ["Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "Edexcel A",
      papers: ["Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "Edexcel B",
      papers: ["Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "Edexcel IGCSE",
      papers: ["Paper 1", "Paper 2"]
    }, {
      name: "OCR A",
      papers: ["Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "OCR B",
      papers: ["Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "Eduqas A",
      papers: ["Component 1", "Component 2", "Component 3"]
    }, {
      name: "Eduqas B",
      papers: ["Component 1", "Component 2", "Component 3"]
    }, {
      name: "WJEC",
      papers: ["Unit 1", "Unit 2", "Unit 3"]
    }]
  }],
  History: [{
    name: "GCSEs & IGCSEs",
    examBoards: [{
      name: "AQA",
      papers: ["Paper 1", "Paper 2"]
    }, {
      name: "CAIE",
      papers: ["Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "Edexcel GCSE",
      papers: ["Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "Edexcel IGCSE",
      papers: ["Paper 1", "Paper 2"]
    }, {
      name: "OCR A",
      papers: ["Component 1", "Component 2", "Component 3"]
    }, {
      name: "OCR B",
      papers: ["Component 1", "Component 2", "Component 3"]
    }, {
      name: "Eduqas",
      papers: ["Component 1", "Component 2"]
    }, {
      name: "WJEC",
      papers: ["Unit 1", "Unit 2", "Unit 3"]
    }]
  }],
  Psychology: [{
    name: "GCSEs",
    examBoards: [{
      name: "AQA",
      papers: ["Paper 1", "Paper 2"]
    }, {
      name: "Edexcel",
      papers: ["Paper 1", "Paper 2"]
    }, {
      name: "OCR",
      papers: ["Paper 1", "Paper 2"]
    }]
  }]
};
const aLevelSubjects = {
  Biology: [{
    name: "AS & A-Levels",
    examBoards: [{
      name: "AQA",
      papers: ["AS Paper 1", "AS Paper 2", "Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "OCR A",
      papers: ["AS Paper 1", "AS Paper 2", "Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "OCR B",
      papers: ["AS Paper 1", "AS Paper 2", "Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "Edexcel A",
      papers: ["AS Paper 1", "AS Paper 2", "Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "Edexcel B",
      papers: ["AS Paper 1", "AS Paper 2", "Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "Eduqas",
      papers: ["AS Component 1", "AS Component 2", "Component 1", "Component 2", "Component 3"]
    }, {
      name: "WJEC",
      papers: ["AS Component 1", "AS Component 2", "Component 1", "Component 2", "Component 3"]
    }]
  }, {
    name: "International A-Levels",
    examBoards: [{
      name: "CAIE",
      papers: ["Paper 1", "Paper 2", "Paper 3", "Paper 4", "Paper 5"]
    }, {
      name: "Edexcel",
      papers: ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6"]
    }]
  }, {
    name: "Legacy",
    examBoards: [{
      name: "AQA",
      papers: ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6"]
    }, {
      name: "OCR",
      papers: ["Unit 1", "Unit 2", "Unit 4", "Unit 5"]
    }, {
      name: "WJEC",
      papers: ["Unit 1", "Unit 2", "Unit 4", "Unit 5"]
    }]
  }],
  Chemistry: [{
    name: "AS & A-Levels",
    examBoards: [{
      name: "AQA",
      papers: ["AS Paper 1", "AS Paper 2", "Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "OCR A",
      papers: ["AS Paper 1", "AS Paper 2", "Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "OCR B",
      papers: ["AS Paper 1", "AS Paper 2", "Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "Edexcel",
      papers: ["AS Paper 1", "AS Paper 2", "Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "Eduqas",
      papers: ["AS Component 1", "AS Component 2", "Component 1", "Component 2", "Component 3"]
    }, {
      name: "WJEC",
      papers: ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]
    }]
  }, {
    name: "International A-Levels",
    examBoards: [{
      name: "CAIE",
      papers: ["Paper 1", "Paper 2", "Paper 3", "Paper 4", "Paper 5"]
    }, {
      name: "Edexcel",
      papers: ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6"]
    }]
  }, {
    name: "Legacy",
    examBoards: [{
      name: "AQA",
      papers: ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6"]
    }, {
      name: "OCR",
      papers: ["Unit 1", "Unit 2", "Unit 4", "Unit 5"]
    }, {
      name: "WJEC",
      papers: ["Unit 1", "Unit 2", "Unit 4", "Unit 5"]
    }]
  }],
  Physics: [{
    name: "AS & A-Levels",
    examBoards: [{
      name: "AQA",
      papers: ["AS Paper 1", "AS Paper 2", "Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "OCR A",
      papers: ["AS Paper 1", "AS Paper 2", "Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "OCR B",
      papers: ["AS Paper 1", "AS Paper 2", "Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "Edexcel",
      papers: ["AS Paper 1", "AS Paper 2", "Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "Eduqas",
      papers: ["AS Component 1", "AS Component 2", "Component 1", "Component 2", "Component 3"]
    }, {
      name: "WJEC",
      papers: ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]
    }]
  }, {
    name: "International A-Levels",
    examBoards: [{
      name: "CAIE",
      papers: ["Paper 1", "Paper 2", "Paper 3", "Paper 4", "Paper 5"]
    }, {
      name: "Edexcel",
      papers: ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6"]
    }]
  }, {
    name: "Legacy",
    examBoards: [{
      name: "AQA",
      papers: ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6"]
    }, {
      name: "OCR",
      papers: ["Unit 1", "Unit 2", "Unit 4", "Unit 5"]
    }, {
      name: "WJEC",
      papers: ["Unit 1", "Unit 2", "Unit 4", "Unit 5"]
    }]
  }],
  "Computer Science": [{
    name: "AS & A-Levels",
    examBoards: [{
      name: "AQA",
      papers: ["AS Paper 1", "AS Paper 2", "Paper 1", "Paper 2"]
    }, {
      name: "OCR",
      papers: ["AS Paper 1", "AS Paper 2", "Paper 1", "Paper 2"]
    }, {
      name: "Eduqas",
      papers: ["AS Component 1", "AS Component 2", "Component 1", "Component 2"]
    }, {
      name: "WJEC",
      papers: ["Unit 1", "Unit 2", "Unit 3", "Unit 4"]
    }]
  }, {
    name: "International A-Levels",
    examBoards: [{
      name: "CAIE",
      papers: ["Paper 1", "Paper 2", "Paper 3", "Paper 4"]
    }]
  }],
  Maths: [{
    name: "A-Levels",
    examBoards: [{
      name: "AQA",
      papers: ["AS-Level", "A-Level"]
    }, {
      name: "AQA Further",
      papers: ["AS-Level", "A-Level"]
    }, {
      name: "OCR A",
      papers: ["AS-Level", "A-Level"]
    }, {
      name: "OCR A Further",
      papers: ["AS-Level", "A-Level"]
    }, {
      name: "OCR B (MEI)",
      papers: ["AS-Level", "A-Level"]
    }, {
      name: "OCR B (MEI) Further",
      papers: ["AS-Level", "A-Level"]
    }, {
      name: "Edexcel",
      papers: ["AS-Level", "A-Level"]
    }, {
      name: "Edexcel Further",
      papers: ["AS-Level", "A-Level"]
    }, {
      name: "WJEC",
      papers: ["AS-Level", "A-Level"]
    }, {
      name: "WJEC Further",
      papers: ["AS-Level", "A-Level"]
    }]
  }, {
    name: "International A-Levels",
    examBoards: [{
      name: "CAIE",
      papers: ["Pure 1", "Pure 2", "Pure 3", "Further Pure 1", "Further Pure 2", "Mechanics 1", "Mechanics 2", "Further Mechanics", "Statistics 1", "Statistics 2", "Further Probability and Statistics"]
    }, {
      name: "Edexcel",
      papers: ["Pure 1", "Pure 2", "Pure 3", "Pure 4", "Further Pure 1", "Further Pure 2", "Further Pure 3", "Mechanics 1", "Mechanics 2", "Mechanics 3", "Statistics 1", "Statistics 2", "Statistics 3", "Decision 1"]
    }]
  }],
  "English Language": [{
    name: "AS & A-Levels",
    examBoards: [{
      name: "AQA",
      papers: ["AS Paper 1", "AS Paper 2", "Paper 1", "Paper 2"]
    }, {
      name: "OCR",
      papers: ["AS Paper 1", "AS Paper 2", "Paper 1", "Paper 2"]
    }, {
      name: "Edexcel",
      papers: ["AS Paper 1", "AS Paper 2", "Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "Eduqas",
      papers: ["AS Component 1", "AS Component 2", "Component 1", "Component 2", "Component 3"]
    }, {
      name: "WJEC",
      papers: ["Unit 1", "Unit 2", "Unit 3", "Unit 4"]
    }]
  }, {
    name: "International A-Levels",
    examBoards: [{
      name: "CAIE",
      papers: ["Paper 1", "Paper 2", "Paper 3", "Paper 4"]
    }, {
      name: "Edexcel",
      papers: ["Unit 1", "Unit 2", "Unit 3", "Unit 4"]
    }]
  }],
  "English Literature": [{
    name: "AS & A-Levels",
    examBoards: [{
      name: "AQA A",
      papers: ["AS Paper 1", "AS Paper 2", "Paper 1", "Paper 2A", "Paper 2B"]
    }, {
      name: "AQA B",
      papers: ["AS Paper 1A", "AS Paper 1B", "AS Paper 2A", "AS Paper 2B", , "Paper 1A", "Paper 1B", "Paper 2A", "Paper 2B"]
    }, {
      name: "OCR",
      papers: ["AS Paper 1", "AS Paper 2", "Paper 1", "Paper 2"]
    }, {
      name: "Edexcel",
      papers: ["AS Paper 1", "AS Paper 2", "Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "Eduqas",
      papers: ["AS Component 1", "AS Component 2", "Component 1", "Component 2", "Component 3"]
    }, {
      name: "WJEC",
      papers: ["Unit 1", "Unit 2", "Unit 3", "Unit 4"]
    }]
  }, {
    name: "International A-Levels",
    examBoards: [{
      name: "CAIE",
      papers: ["Paper 1", "Paper 2", "Paper 3", "Paper 4", "Paper 5", "Paper 6", "Paper 7"]
    }, {
      name: "Edexcel",
      papers: ["Unit 1", "Unit 2", "Unit 3", "Unit 4"]
    }]
  }],
  Economics: [{
    name: "AS & A-Levels",
    examBoards: [{
      name: "AQA",
      papers: ["AS Paper 1", "AS Paper 2", "Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "OCR",
      papers: ["AS Paper 1", "AS Paper 2", "Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "Edexcel A",
      papers: ["AS Paper 1", "AS Paper 2", "Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "Edexcel B",
      papers: ["AS Paper 1", "AS Paper 2", "Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "Eduqas",
      papers: ["AS Component 1", "AS Component 2", "Component 1", "Component 2", "Component 3"]
    }, {
      name: "WJEC",
      papers: ["Unit 1", "Unit 2", "Unit 3", "Unit 4"]
    }]
  }, {
    name: "International A-Levels",
    examBoards: [{
      name: "CAIE",
      papers: ["Paper 1", "Paper 2", "Paper 3", "Paper 4"]
    }, {
      name: "Edexcel",
      papers: ["Unit 1", "Unit 2", "Unit 3", "Unit 4"]
    }]
  }, {
    name: "Legacy",
    examBoards: [{
      name: "AQA",
      papers: ["Unit 1", "Unit 2", "Unit 3", "Unit 4"]
    }, {
      name: "OCR",
      papers: ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]
    }, {
      name: "WJEC",
      papers: ["Unit 1", "Unit 2", "Unit 3", "Unit 4"]
    }]
  }],
  Geography: [{
    name: "AS & A-Levels",
    examBoards: [{
      name: "AQA",
      papers: ["AS Paper 1", "AS Paper 2", "Paper 1", "Paper 2"]
    }, {
      name: "OCR",
      papers: ["AS Component 1", "AS Component 2", "Component 1", "Component 2", "Component 3"]
    }, {
      name: "Edexcel",
      papers: ["AS Paper 1", "AS Paper 2", "Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "Eduqas",
      papers: ["AS Component 1", "AS Component 2", "Component 1", "Component 2", "Component 3"]
    }, {
      name: "WJEC",
      papers: ["Unit 1", "Unit 2", "Unit 3", "Unit 4"]
    }]
  }, {
    name: "International A-Levels",
    examBoards: [{
      name: "CAIE",
      papers: ["Paper 1", "Paper 2", "Paper 3", "Paper 4"]
    }, {
      name: "Edexcel",
      papers: ["Unit 1", "Unit 2", "Unit 3", "Unit 4"]
    }]
  }, {
    name: "Legacy",
    examBoards: [{
      name: "AQA",
      papers: ["Unit 1", "Unit 2", "Unit 3", "Unit 4"]
    }, {
      name: "OCR",
      papers: ["Unit 1", "Unit 2", "Unit 3", "Unit 4"]
    }, {
      name: "WJEC",
      papers: ["Unit 1", "Unit 2", "Unit 3", "Unit 4"]
    }]
  }],
  History: [{
    name: "AS & A-Levels",
    examBoards: [{
      name: "AQA",
      papers: ["AS Component 1", "AS Component 2", "Component 1", "Component 2"]
    }, {
      name: "OCR A",
      papers: ["AS Unit 1", "AS Unit 2", "Unit 1", "Unit 2", "Unit 3"]
    }, {
      name: "Edexcel",
      papers: ["AS Paper 1", "AS Paper 2", "Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "WJEC",
      papers: ["Unit 1", "Unit 2", "Unit 3", "Unit 4"]
    }]
  }, {
    name: "International A-Levels",
    examBoards: [{
      name: "CAIE",
      papers: ["Paper 1", "Paper 2", "Paper 3", "Paper 4"]
    }, {
      name: "Edexcel",
      papers: ["Paper 1", "Paper 2", "Paper 3", "Paper 4"]
    }]
  }],
  Psychology: [{
    name: "AS & A-Levels",
    examBoards: [{
      name: "AQA",
      papers: ["AS Paper 1", "AS Paper 2", "Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "OCR",
      papers: ["AS Paper 1", "AS Paper 2", "Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "Edexcel",
      papers: ["AS Paper 1", "AS Paper 2", "Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "Eduqas",
      papers: ["AS Component 1", "AS Component 2", "Component 1", "Component 2", "Component 3"]
    }, {
      name: "WJEC",
      papers: ["Unit 1", "Unit 2", "Unit 3", "Unit 4"]
    }]
  }, {
    name: "International A-Levels",
    examBoards: [{
      name: "CAIE (9698)",
      papers: ["Paper 1", "Paper 2", "Paper 3", "Paper 4"]
    }, {
      name: "CAIE (9990)",
      papers: ["Paper 1", "Paper 2", "Paper 3"]
    }, {
      name: "Edexcel",
      papers: ["Paper 1", "Paper 2", "Paper 3", "Paper 4"]
    }]
  }, {
    name: "Legacy",
    examBoards: [{
      name: "AQA A",
      papers: ["Unit 1", "Unit 2", "Unit 3", "Unit 4"]
    }, {
      name: "AQA B",
      papers: ["Unit 1", "Unit 2", "Unit 3", "Unit 4"]
    }, {
      name: "OCR",
      papers: ["Unit 1", "Unit 2", "Unit 3", "Unit 4"]
    }, {
      name: "WJEC",
      papers: ["Unit 1", "Unit 2", "Unit 3", "Unit 4"]
    }]
  }]
};
const _sfc_main$1 = {
  __name: "PastPaperSelection",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const level = ref("gcse");
    const selectedTypes = reactive({});
    reactive({});
    const subjectColors = computed(() => ({
      Biology: "#4CAF50",
      Chemistry: "#2196F3",
      Physics: "#FF9800",
      "Combined Science": "#9C27B0",
      "Computer Science": "#00BCD4",
      Maths: "#F44336",
      "English Language": "#3F51B5",
      "English Literature": "#009688",
      Economics: "#FFC107",
      Geography: "#4CAF50",
      History: "#2196F3",
      Psychology: "#FF9800"
    }));
    const subjects = computed(() => {
      return level.value === "gcse" ? Object.keys(gcseSubjects) : Object.keys(aLevelSubjects);
    });
    const getSubjectTypes = (subject) => {
      const subjectData = level.value === "gcse" ? gcseSubjects[subject] : aLevelSubjects[subject];
      return subjectData.map((type) => type.name);
    };
    const getExamBoards = (subject, type) => {
      const subjectData = level.value === "gcse" ? gcseSubjects[subject] : aLevelSubjects[subject];
      const typeData = subjectData.find((t) => t.name === type);
      return typeData ? typeData.examBoards : [];
    };
    const openPastPaper = (level2, subject, type, board, paper) => {
      const id = `${level2}-${subject}-${type}-${board}-${paper}`.toLowerCase().replace(/\s+/g, "-");
      router.push(`/pastpapers/${id}`);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({
        fluid: "",
        class: "max-width-1600 py-24 px-4 px-lg-12"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center mb-8" data-v-ca17f45d${_scopeId}><div class="blur-effect pa-6 rounded-xl text-white mx-auto" data-v-ca17f45d${_scopeId}><h1 class="text-4xl md:text-5xl font-bold mb-6" data-v-ca17f45d${_scopeId}> Past Papers Selection </h1><p class="text-lg md:text-xl mb-12 mx-auto" style="${ssrRenderStyle({
              "max-width": "800px"
            })}" data-v-ca17f45d${_scopeId}> Access our comprehensive collection of past papers from leading examination boards, covering all major subjects at both GCSE and A-Level standards. </p>`);
            _push2(ssrRenderComponent(VBtnToggle, {
              modelValue: level.value,
              "onUpdate:modelValue": ($event) => level.value = $event,
              mandatory: "",
              class: "level-toggle pa-2 rounded-xl bg-gray-100 d-inline-flex"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(["gcse", "alevel"], (lvl) => {
                    _push3(ssrRenderComponent(VBtn, {
                      key: lvl,
                      value: lvl,
                      class: "text-lg font-semibold px-8 py-3 rounded-lg",
                      color: level.value === lvl ? "primary" : "",
                      variant: "flat"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(lvl === "gcse" ? "GCSE" : "A-Level")}`);
                        } else {
                          return [createTextVNode(toDisplayString(lvl === "gcse" ? "GCSE" : "A-Level"), 1)];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [(openBlock(), createBlock(Fragment, null, renderList(["gcse", "alevel"], (lvl) => {
                    return createVNode(VBtn, {
                      key: lvl,
                      value: lvl,
                      class: "text-lg font-semibold px-8 py-3 rounded-lg",
                      color: level.value === lvl ? "primary" : "",
                      variant: "flat"
                    }, {
                      default: withCtx(() => [createTextVNode(toDisplayString(lvl === "gcse" ? "GCSE" : "A-Level"), 1)]),
                      _: 2
                    }, 1032, ["value", "color"]);
                  }), 64))];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(VRow, {
              class: "mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    class: "text-white pa-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, {
                          align: "center"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "6",
                                class: "blur-effect rounded-xl pa-6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h1 class="text-2xl md:text-3xl font-bold mb-4" data-v-ca17f45d${_scopeId5}>${ssrInterpolate(level.value === "gcse" ? "GCSE Past Papers" : "A-Level Past Papers")}</h1><p class="text-lg mb-6" data-v-ca17f45d${_scopeId5}>${ssrInterpolate(level.value === "gcse" ? "Prepare for your GCSE exams with our extensive collection of past papers, mark schemes, and examiner reports." : "Get ready for your A-Level examinations with comprehensive past papers and detailed marking guidelines.")}</p><div class="stats d-flex gap-6" data-v-ca17f45d${_scopeId5}><div class="stat" data-v-ca17f45d${_scopeId5}><h1 class="text-3xl font-bold mb-1" data-v-ca17f45d${_scopeId5}> 12+ </h1><p class="text-white" data-v-ca17f45d${_scopeId5}> Subjects </p></div><div class="stat" data-v-ca17f45d${_scopeId5}><h1 class="text-3xl font-bold mb-1" data-v-ca17f45d${_scopeId5}> 5+ </h1><p class="text-white" data-v-ca17f45d${_scopeId5}> Exam Boards </p></div><div class="stat" data-v-ca17f45d${_scopeId5}><h1 class="text-3xl font-bold mb-1" data-v-ca17f45d${_scopeId5}> 200+ </h1><p class="text-white" data-v-ca17f45d${_scopeId5}> Papers </p></div></div>`);
                                  } else {
                                    return [createVNode("h1", {
                                      class: "text-2xl md:text-3xl font-bold mb-4"
                                    }, toDisplayString(level.value === "gcse" ? "GCSE Past Papers" : "A-Level Past Papers"), 1), createVNode("p", {
                                      class: "text-lg mb-6"
                                    }, toDisplayString(level.value === "gcse" ? "Prepare for your GCSE exams with our extensive collection of past papers, mark schemes, and examiner reports." : "Get ready for your A-Level examinations with comprehensive past papers and detailed marking guidelines."), 1), createVNode("div", {
                                      class: "stats d-flex gap-6"
                                    }, [createVNode("div", {
                                      class: "stat"
                                    }, [createVNode("h1", {
                                      class: "text-3xl font-bold mb-1"
                                    }, " 12+ "), createVNode("p", {
                                      class: "text-white"
                                    }, " Subjects ")]), createVNode("div", {
                                      class: "stat"
                                    }, [createVNode("h1", {
                                      class: "text-3xl font-bold mb-1"
                                    }, " 5+ "), createVNode("p", {
                                      class: "text-white"
                                    }, " Exam Boards ")]), createVNode("div", {
                                      class: "stat"
                                    }, [createVNode("h1", {
                                      class: "text-3xl font-bold mb-1"
                                    }, " 200+ "), createVNode("p", {
                                      class: "text-white"
                                    }, " Papers ")])])];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "6",
                                class: "d-flex justify-center"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<img${ssrRenderAttr("src", _imports_0)} alt="Level Image" style="${ssrRenderStyle({
                                      "width": "100%",
                                      "max-width": "400px"
                                    })}" data-v-ca17f45d${_scopeId5}>`);
                                  } else {
                                    return [createVNode("img", {
                                      src: _imports_0,
                                      alt: "Level Image",
                                      style: {
                                        "width": "100%",
                                        "max-width": "400px"
                                      }
                                    })];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [createVNode(VCol, {
                                cols: "12",
                                md: "6",
                                class: "blur-effect rounded-xl pa-6"
                              }, {
                                default: withCtx(() => [createVNode("h1", {
                                  class: "text-2xl md:text-3xl font-bold mb-4"
                                }, toDisplayString(level.value === "gcse" ? "GCSE Past Papers" : "A-Level Past Papers"), 1), createVNode("p", {
                                  class: "text-lg mb-6"
                                }, toDisplayString(level.value === "gcse" ? "Prepare for your GCSE exams with our extensive collection of past papers, mark schemes, and examiner reports." : "Get ready for your A-Level examinations with comprehensive past papers and detailed marking guidelines."), 1), createVNode("div", {
                                  class: "stats d-flex gap-6"
                                }, [createVNode("div", {
                                  class: "stat"
                                }, [createVNode("h1", {
                                  class: "text-3xl font-bold mb-1"
                                }, " 12+ "), createVNode("p", {
                                  class: "text-white"
                                }, " Subjects ")]), createVNode("div", {
                                  class: "stat"
                                }, [createVNode("h1", {
                                  class: "text-3xl font-bold mb-1"
                                }, " 5+ "), createVNode("p", {
                                  class: "text-white"
                                }, " Exam Boards ")]), createVNode("div", {
                                  class: "stat"
                                }, [createVNode("h1", {
                                  class: "text-3xl font-bold mb-1"
                                }, " 200+ "), createVNode("p", {
                                  class: "text-white"
                                }, " Papers ")])])]),
                                _: 1
                              }), createVNode(VCol, {
                                cols: "12",
                                md: "6",
                                class: "d-flex justify-center"
                              }, {
                                default: withCtx(() => [createVNode("img", {
                                  src: _imports_0,
                                  alt: "Level Image",
                                  style: {
                                    "width": "100%",
                                    "max-width": "400px"
                                  }
                                })]),
                                _: 1
                              })];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [createVNode(VRow, {
                          align: "center"
                        }, {
                          default: withCtx(() => [createVNode(VCol, {
                            cols: "12",
                            md: "6",
                            class: "blur-effect rounded-xl pa-6"
                          }, {
                            default: withCtx(() => [createVNode("h1", {
                              class: "text-2xl md:text-3xl font-bold mb-4"
                            }, toDisplayString(level.value === "gcse" ? "GCSE Past Papers" : "A-Level Past Papers"), 1), createVNode("p", {
                              class: "text-lg mb-6"
                            }, toDisplayString(level.value === "gcse" ? "Prepare for your GCSE exams with our extensive collection of past papers, mark schemes, and examiner reports." : "Get ready for your A-Level examinations with comprehensive past papers and detailed marking guidelines."), 1), createVNode("div", {
                              class: "stats d-flex gap-6"
                            }, [createVNode("div", {
                              class: "stat"
                            }, [createVNode("h1", {
                              class: "text-3xl font-bold mb-1"
                            }, " 12+ "), createVNode("p", {
                              class: "text-white"
                            }, " Subjects ")]), createVNode("div", {
                              class: "stat"
                            }, [createVNode("h1", {
                              class: "text-3xl font-bold mb-1"
                            }, " 5+ "), createVNode("p", {
                              class: "text-white"
                            }, " Exam Boards ")]), createVNode("div", {
                              class: "stat"
                            }, [createVNode("h1", {
                              class: "text-3xl font-bold mb-1"
                            }, " 200+ "), createVNode("p", {
                              class: "text-white"
                            }, " Papers ")])])]),
                            _: 1
                          }), createVNode(VCol, {
                            cols: "12",
                            md: "6",
                            class: "d-flex justify-center"
                          }, {
                            default: withCtx(() => [createVNode("img", {
                              src: _imports_0,
                              alt: "Level Image",
                              style: {
                                "width": "100%",
                                "max-width": "400px"
                              }
                            })]),
                            _: 1
                          })]),
                          _: 1
                        })];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [createVNode(VCol, {
                    cols: "12",
                    class: "text-white pa-6"
                  }, {
                    default: withCtx(() => [createVNode(VRow, {
                      align: "center"
                    }, {
                      default: withCtx(() => [createVNode(VCol, {
                        cols: "12",
                        md: "6",
                        class: "blur-effect rounded-xl pa-6"
                      }, {
                        default: withCtx(() => [createVNode("h1", {
                          class: "text-2xl md:text-3xl font-bold mb-4"
                        }, toDisplayString(level.value === "gcse" ? "GCSE Past Papers" : "A-Level Past Papers"), 1), createVNode("p", {
                          class: "text-lg mb-6"
                        }, toDisplayString(level.value === "gcse" ? "Prepare for your GCSE exams with our extensive collection of past papers, mark schemes, and examiner reports." : "Get ready for your A-Level examinations with comprehensive past papers and detailed marking guidelines."), 1), createVNode("div", {
                          class: "stats d-flex gap-6"
                        }, [createVNode("div", {
                          class: "stat"
                        }, [createVNode("h1", {
                          class: "text-3xl font-bold mb-1"
                        }, " 12+ "), createVNode("p", {
                          class: "text-white"
                        }, " Subjects ")]), createVNode("div", {
                          class: "stat"
                        }, [createVNode("h1", {
                          class: "text-3xl font-bold mb-1"
                        }, " 5+ "), createVNode("p", {
                          class: "text-white"
                        }, " Exam Boards ")]), createVNode("div", {
                          class: "stat"
                        }, [createVNode("h1", {
                          class: "text-3xl font-bold mb-1"
                        }, " 200+ "), createVNode("p", {
                          class: "text-white"
                        }, " Papers ")])])]),
                        _: 1
                      }), createVNode(VCol, {
                        cols: "12",
                        md: "6",
                        class: "d-flex justify-center"
                      }, {
                        default: withCtx(() => [createVNode("img", {
                          src: _imports_0,
                          alt: "Level Image",
                          style: {
                            "width": "100%",
                            "max-width": "400px"
                          }
                        })]),
                        _: 1
                      })]),
                      _: 1
                    })]),
                    _: 1
                  })];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(subjects.value, (subject) => {
                    _push3(ssrRenderComponent(VCol, {
                      key: subject,
                      cols: "12",
                      sm: "6",
                      md: "4",
                      class: "mb-6"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCard, {
                            class: ["subject-card h-100 rounded-xl", `border-${subjectColors.value[subject]}`]
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="subject-header pa-6" style="${ssrRenderStyle({
                                  backgroundColor: `${subjectColors.value[subject]}15`
                                })}" data-v-ca17f45d${_scopeId4}><h1 class="text-xl font-bold" style="${ssrRenderStyle({
                                  color: subjectColors.value[subject]
                                })}" data-v-ca17f45d${_scopeId4}>${ssrInterpolate(subject)}</h1></div>`);
                                _push5(ssrRenderComponent(VCardText, {
                                  class: "pa-6"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VChipGroup, {
                                        modelValue: selectedTypes[subject],
                                        "onUpdate:modelValue": ($event) => selectedTypes[subject] = $event,
                                        class: "mb-4 justify-center",
                                        column: ""
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<!--[-->`);
                                            ssrRenderList(getSubjectTypes(subject), (type) => {
                                              _push7(ssrRenderComponent(VChip, {
                                                key: type,
                                                value: type,
                                                color: subjectColors.value[subject],
                                                variant: "outlined",
                                                class: "ma-1",
                                                filter: ""
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`<p data-v-ca17f45d${_scopeId7}>${ssrInterpolate(type)}</p>`);
                                                  } else {
                                                    return [createVNode("p", null, toDisplayString(type), 1)];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            });
                                            _push7(`<!--]-->`);
                                          } else {
                                            return [(openBlock(true), createBlock(Fragment, null, renderList(getSubjectTypes(subject), (type) => {
                                              return openBlock(), createBlock(VChip, {
                                                key: type,
                                                value: type,
                                                color: subjectColors.value[subject],
                                                variant: "outlined",
                                                class: "ma-1",
                                                filter: ""
                                              }, {
                                                default: withCtx(() => [createVNode("p", null, toDisplayString(type), 1)]),
                                                _: 2
                                              }, 1032, ["value", "color"]);
                                            }), 128))];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      if (selectedTypes[subject]) {
                                        _push6(`<div class="selected-content" data-v-ca17f45d${_scopeId5}>`);
                                        _push6(ssrRenderComponent(VExpansionPanels, null, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<!--[-->`);
                                              ssrRenderList(getExamBoards(subject, selectedTypes[subject]), (board) => {
                                                _push7(ssrRenderComponent(VExpansionPanel, {
                                                  key: board.name
                                                }, {
                                                  default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                    if (_push8) {
                                                      _push8(ssrRenderComponent(VExpansionPanelTitle, null, {
                                                        default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                          if (_push9) {
                                                            _push9(`<h1 data-v-ca17f45d${_scopeId8}>${ssrInterpolate(board.name)}</h1>`);
                                                          } else {
                                                            return [createVNode("h1", null, toDisplayString(board.name), 1)];
                                                          }
                                                        }),
                                                        _: 2
                                                      }, _parent8, _scopeId7));
                                                      _push8(ssrRenderComponent(VExpansionPanelText, null, {
                                                        default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                          if (_push9) {
                                                            _push9(`<div class="paper-list" data-v-ca17f45d${_scopeId8}><!--[-->`);
                                                            ssrRenderList(board.papers, (paper) => {
                                                              _push9(`<div class="paper-item pa-3 d-flex justify-space-between align-center" data-v-ca17f45d${_scopeId8}><p data-v-ca17f45d${_scopeId8}>${ssrInterpolate(paper)}</p>`);
                                                              _push9(ssrRenderComponent(VBtn, {
                                                                color: subjectColors.value[subject],
                                                                variant: "text",
                                                                density: "comfortable",
                                                                onClick: ($event) => openPastPaper(level.value, subject, selectedTypes[subject], board.name, paper)
                                                              }, {
                                                                default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                                  if (_push10) {
                                                                    _push10(` View Paper `);
                                                                  } else {
                                                                    return [createTextVNode(" View Paper ")];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent9, _scopeId8));
                                                              _push9(`</div>`);
                                                            });
                                                            _push9(`<!--]--></div>`);
                                                          } else {
                                                            return [createVNode("div", {
                                                              class: "paper-list"
                                                            }, [(openBlock(true), createBlock(Fragment, null, renderList(board.papers, (paper) => {
                                                              return openBlock(), createBlock("div", {
                                                                key: paper,
                                                                class: "paper-item pa-3 d-flex justify-space-between align-center"
                                                              }, [createVNode("p", null, toDisplayString(paper), 1), createVNode(VBtn, {
                                                                color: subjectColors.value[subject],
                                                                variant: "text",
                                                                density: "comfortable",
                                                                onClick: ($event) => openPastPaper(level.value, subject, selectedTypes[subject], board.name, paper)
                                                              }, {
                                                                default: withCtx(() => [createTextVNode(" View Paper ")]),
                                                                _: 2
                                                              }, 1032, ["color", "onClick"])]);
                                                            }), 128))])];
                                                          }
                                                        }),
                                                        _: 2
                                                      }, _parent8, _scopeId7));
                                                    } else {
                                                      return [createVNode(VExpansionPanelTitle, null, {
                                                        default: withCtx(() => [createVNode("h1", null, toDisplayString(board.name), 1)]),
                                                        _: 2
                                                      }, 1024), createVNode(VExpansionPanelText, null, {
                                                        default: withCtx(() => [createVNode("div", {
                                                          class: "paper-list"
                                                        }, [(openBlock(true), createBlock(Fragment, null, renderList(board.papers, (paper) => {
                                                          return openBlock(), createBlock("div", {
                                                            key: paper,
                                                            class: "paper-item pa-3 d-flex justify-space-between align-center"
                                                          }, [createVNode("p", null, toDisplayString(paper), 1), createVNode(VBtn, {
                                                            color: subjectColors.value[subject],
                                                            variant: "text",
                                                            density: "comfortable",
                                                            onClick: ($event) => openPastPaper(level.value, subject, selectedTypes[subject], board.name, paper)
                                                          }, {
                                                            default: withCtx(() => [createTextVNode(" View Paper ")]),
                                                            _: 2
                                                          }, 1032, ["color", "onClick"])]);
                                                        }), 128))])]),
                                                        _: 2
                                                      }, 1024)];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent7, _scopeId6));
                                              });
                                              _push7(`<!--]-->`);
                                            } else {
                                              return [(openBlock(true), createBlock(Fragment, null, renderList(getExamBoards(subject, selectedTypes[subject]), (board) => {
                                                return openBlock(), createBlock(VExpansionPanel, {
                                                  key: board.name
                                                }, {
                                                  default: withCtx(() => [createVNode(VExpansionPanelTitle, null, {
                                                    default: withCtx(() => [createVNode("h1", null, toDisplayString(board.name), 1)]),
                                                    _: 2
                                                  }, 1024), createVNode(VExpansionPanelText, null, {
                                                    default: withCtx(() => [createVNode("div", {
                                                      class: "paper-list"
                                                    }, [(openBlock(true), createBlock(Fragment, null, renderList(board.papers, (paper) => {
                                                      return openBlock(), createBlock("div", {
                                                        key: paper,
                                                        class: "paper-item pa-3 d-flex justify-space-between align-center"
                                                      }, [createVNode("p", null, toDisplayString(paper), 1), createVNode(VBtn, {
                                                        color: subjectColors.value[subject],
                                                        variant: "text",
                                                        density: "comfortable",
                                                        onClick: ($event) => openPastPaper(level.value, subject, selectedTypes[subject], board.name, paper)
                                                      }, {
                                                        default: withCtx(() => [createTextVNode(" View Paper ")]),
                                                        _: 2
                                                      }, 1032, ["color", "onClick"])]);
                                                    }), 128))])]),
                                                    _: 2
                                                  }, 1024)]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(`</div>`);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                    } else {
                                      return [createVNode(VChipGroup, {
                                        modelValue: selectedTypes[subject],
                                        "onUpdate:modelValue": ($event) => selectedTypes[subject] = $event,
                                        class: "mb-4 justify-center",
                                        column: ""
                                      }, {
                                        default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(getSubjectTypes(subject), (type) => {
                                          return openBlock(), createBlock(VChip, {
                                            key: type,
                                            value: type,
                                            color: subjectColors.value[subject],
                                            variant: "outlined",
                                            class: "ma-1",
                                            filter: ""
                                          }, {
                                            default: withCtx(() => [createVNode("p", null, toDisplayString(type), 1)]),
                                            _: 2
                                          }, 1032, ["value", "color"]);
                                        }), 128))]),
                                        _: 2
                                      }, 1032, ["modelValue", "onUpdate:modelValue"]), selectedTypes[subject] ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "selected-content"
                                      }, [createVNode(VExpansionPanels, null, {
                                        default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(getExamBoards(subject, selectedTypes[subject]), (board) => {
                                          return openBlock(), createBlock(VExpansionPanel, {
                                            key: board.name
                                          }, {
                                            default: withCtx(() => [createVNode(VExpansionPanelTitle, null, {
                                              default: withCtx(() => [createVNode("h1", null, toDisplayString(board.name), 1)]),
                                              _: 2
                                            }, 1024), createVNode(VExpansionPanelText, null, {
                                              default: withCtx(() => [createVNode("div", {
                                                class: "paper-list"
                                              }, [(openBlock(true), createBlock(Fragment, null, renderList(board.papers, (paper) => {
                                                return openBlock(), createBlock("div", {
                                                  key: paper,
                                                  class: "paper-item pa-3 d-flex justify-space-between align-center"
                                                }, [createVNode("p", null, toDisplayString(paper), 1), createVNode(VBtn, {
                                                  color: subjectColors.value[subject],
                                                  variant: "text",
                                                  density: "comfortable",
                                                  onClick: ($event) => openPastPaper(level.value, subject, selectedTypes[subject], board.name, paper)
                                                }, {
                                                  default: withCtx(() => [createTextVNode(" View Paper ")]),
                                                  _: 2
                                                }, 1032, ["color", "onClick"])]);
                                              }), 128))])]),
                                              _: 2
                                            }, 1024)]),
                                            _: 2
                                          }, 1024);
                                        }), 128))]),
                                        _: 2
                                      }, 1024)])) : createCommentVNode("", true)];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [createVNode("div", {
                                  class: "subject-header pa-6",
                                  style: {
                                    backgroundColor: `${subjectColors.value[subject]}15`
                                  }
                                }, [createVNode("h1", {
                                  class: "text-xl font-bold",
                                  style: {
                                    color: subjectColors.value[subject]
                                  }
                                }, toDisplayString(subject), 5)], 4), createVNode(VCardText, {
                                  class: "pa-6"
                                }, {
                                  default: withCtx(() => [createVNode(VChipGroup, {
                                    modelValue: selectedTypes[subject],
                                    "onUpdate:modelValue": ($event) => selectedTypes[subject] = $event,
                                    class: "mb-4 justify-center",
                                    column: ""
                                  }, {
                                    default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(getSubjectTypes(subject), (type) => {
                                      return openBlock(), createBlock(VChip, {
                                        key: type,
                                        value: type,
                                        color: subjectColors.value[subject],
                                        variant: "outlined",
                                        class: "ma-1",
                                        filter: ""
                                      }, {
                                        default: withCtx(() => [createVNode("p", null, toDisplayString(type), 1)]),
                                        _: 2
                                      }, 1032, ["value", "color"]);
                                    }), 128))]),
                                    _: 2
                                  }, 1032, ["modelValue", "onUpdate:modelValue"]), selectedTypes[subject] ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "selected-content"
                                  }, [createVNode(VExpansionPanels, null, {
                                    default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(getExamBoards(subject, selectedTypes[subject]), (board) => {
                                      return openBlock(), createBlock(VExpansionPanel, {
                                        key: board.name
                                      }, {
                                        default: withCtx(() => [createVNode(VExpansionPanelTitle, null, {
                                          default: withCtx(() => [createVNode("h1", null, toDisplayString(board.name), 1)]),
                                          _: 2
                                        }, 1024), createVNode(VExpansionPanelText, null, {
                                          default: withCtx(() => [createVNode("div", {
                                            class: "paper-list"
                                          }, [(openBlock(true), createBlock(Fragment, null, renderList(board.papers, (paper) => {
                                            return openBlock(), createBlock("div", {
                                              key: paper,
                                              class: "paper-item pa-3 d-flex justify-space-between align-center"
                                            }, [createVNode("p", null, toDisplayString(paper), 1), createVNode(VBtn, {
                                              color: subjectColors.value[subject],
                                              variant: "text",
                                              density: "comfortable",
                                              onClick: ($event) => openPastPaper(level.value, subject, selectedTypes[subject], board.name, paper)
                                            }, {
                                              default: withCtx(() => [createTextVNode(" View Paper ")]),
                                              _: 2
                                            }, 1032, ["color", "onClick"])]);
                                          }), 128))])]),
                                          _: 2
                                        }, 1024)]),
                                        _: 2
                                      }, 1024);
                                    }), 128))]),
                                    _: 2
                                  }, 1024)])) : createCommentVNode("", true)]),
                                  _: 2
                                }, 1024)];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [createVNode(VCard, {
                            class: ["subject-card h-100 rounded-xl", `border-${subjectColors.value[subject]}`]
                          }, {
                            default: withCtx(() => [createVNode("div", {
                              class: "subject-header pa-6",
                              style: {
                                backgroundColor: `${subjectColors.value[subject]}15`
                              }
                            }, [createVNode("h1", {
                              class: "text-xl font-bold",
                              style: {
                                color: subjectColors.value[subject]
                              }
                            }, toDisplayString(subject), 5)], 4), createVNode(VCardText, {
                              class: "pa-6"
                            }, {
                              default: withCtx(() => [createVNode(VChipGroup, {
                                modelValue: selectedTypes[subject],
                                "onUpdate:modelValue": ($event) => selectedTypes[subject] = $event,
                                class: "mb-4 justify-center",
                                column: ""
                              }, {
                                default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(getSubjectTypes(subject), (type) => {
                                  return openBlock(), createBlock(VChip, {
                                    key: type,
                                    value: type,
                                    color: subjectColors.value[subject],
                                    variant: "outlined",
                                    class: "ma-1",
                                    filter: ""
                                  }, {
                                    default: withCtx(() => [createVNode("p", null, toDisplayString(type), 1)]),
                                    _: 2
                                  }, 1032, ["value", "color"]);
                                }), 128))]),
                                _: 2
                              }, 1032, ["modelValue", "onUpdate:modelValue"]), selectedTypes[subject] ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "selected-content"
                              }, [createVNode(VExpansionPanels, null, {
                                default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(getExamBoards(subject, selectedTypes[subject]), (board) => {
                                  return openBlock(), createBlock(VExpansionPanel, {
                                    key: board.name
                                  }, {
                                    default: withCtx(() => [createVNode(VExpansionPanelTitle, null, {
                                      default: withCtx(() => [createVNode("h1", null, toDisplayString(board.name), 1)]),
                                      _: 2
                                    }, 1024), createVNode(VExpansionPanelText, null, {
                                      default: withCtx(() => [createVNode("div", {
                                        class: "paper-list"
                                      }, [(openBlock(true), createBlock(Fragment, null, renderList(board.papers, (paper) => {
                                        return openBlock(), createBlock("div", {
                                          key: paper,
                                          class: "paper-item pa-3 d-flex justify-space-between align-center"
                                        }, [createVNode("p", null, toDisplayString(paper), 1), createVNode(VBtn, {
                                          color: subjectColors.value[subject],
                                          variant: "text",
                                          density: "comfortable",
                                          onClick: ($event) => openPastPaper(level.value, subject, selectedTypes[subject], board.name, paper)
                                        }, {
                                          default: withCtx(() => [createTextVNode(" View Paper ")]),
                                          _: 2
                                        }, 1032, ["color", "onClick"])]);
                                      }), 128))])]),
                                      _: 2
                                    }, 1024)]),
                                    _: 2
                                  }, 1024);
                                }), 128))]),
                                _: 2
                              }, 1024)])) : createCommentVNode("", true)]),
                              _: 2
                            }, 1024)]),
                            _: 2
                          }, 1032, ["class"])];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [(openBlock(true), createBlock(Fragment, null, renderList(subjects.value, (subject) => {
                    return openBlock(), createBlock(VCol, {
                      key: subject,
                      cols: "12",
                      sm: "6",
                      md: "4",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [createVNode(VCard, {
                        class: ["subject-card h-100 rounded-xl", `border-${subjectColors.value[subject]}`]
                      }, {
                        default: withCtx(() => [createVNode("div", {
                          class: "subject-header pa-6",
                          style: {
                            backgroundColor: `${subjectColors.value[subject]}15`
                          }
                        }, [createVNode("h1", {
                          class: "text-xl font-bold",
                          style: {
                            color: subjectColors.value[subject]
                          }
                        }, toDisplayString(subject), 5)], 4), createVNode(VCardText, {
                          class: "pa-6"
                        }, {
                          default: withCtx(() => [createVNode(VChipGroup, {
                            modelValue: selectedTypes[subject],
                            "onUpdate:modelValue": ($event) => selectedTypes[subject] = $event,
                            class: "mb-4 justify-center",
                            column: ""
                          }, {
                            default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(getSubjectTypes(subject), (type) => {
                              return openBlock(), createBlock(VChip, {
                                key: type,
                                value: type,
                                color: subjectColors.value[subject],
                                variant: "outlined",
                                class: "ma-1",
                                filter: ""
                              }, {
                                default: withCtx(() => [createVNode("p", null, toDisplayString(type), 1)]),
                                _: 2
                              }, 1032, ["value", "color"]);
                            }), 128))]),
                            _: 2
                          }, 1032, ["modelValue", "onUpdate:modelValue"]), selectedTypes[subject] ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "selected-content"
                          }, [createVNode(VExpansionPanels, null, {
                            default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(getExamBoards(subject, selectedTypes[subject]), (board) => {
                              return openBlock(), createBlock(VExpansionPanel, {
                                key: board.name
                              }, {
                                default: withCtx(() => [createVNode(VExpansionPanelTitle, null, {
                                  default: withCtx(() => [createVNode("h1", null, toDisplayString(board.name), 1)]),
                                  _: 2
                                }, 1024), createVNode(VExpansionPanelText, null, {
                                  default: withCtx(() => [createVNode("div", {
                                    class: "paper-list"
                                  }, [(openBlock(true), createBlock(Fragment, null, renderList(board.papers, (paper) => {
                                    return openBlock(), createBlock("div", {
                                      key: paper,
                                      class: "paper-item pa-3 d-flex justify-space-between align-center"
                                    }, [createVNode("p", null, toDisplayString(paper), 1), createVNode(VBtn, {
                                      color: subjectColors.value[subject],
                                      variant: "text",
                                      density: "comfortable",
                                      onClick: ($event) => openPastPaper(level.value, subject, selectedTypes[subject], board.name, paper)
                                    }, {
                                      default: withCtx(() => [createTextVNode(" View Paper ")]),
                                      _: 2
                                    }, 1032, ["color", "onClick"])]);
                                  }), 128))])]),
                                  _: 2
                                }, 1024)]),
                                _: 2
                              }, 1024);
                            }), 128))]),
                            _: 2
                          }, 1024)])) : createCommentVNode("", true)]),
                          _: 2
                        }, 1024)]),
                        _: 2
                      }, 1032, ["class"])]),
                      _: 2
                    }, 1024);
                  }), 128))];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [createVNode("div", {
              class: "text-center mb-8"
            }, [createVNode("div", {
              class: "blur-effect pa-6 rounded-xl text-white mx-auto"
            }, [createVNode("h1", {
              class: "text-4xl md:text-5xl font-bold mb-6"
            }, " Past Papers Selection "), createVNode("p", {
              class: "text-lg md:text-xl mb-12 mx-auto",
              style: {
                "max-width": "800px"
              }
            }, " Access our comprehensive collection of past papers from leading examination boards, covering all major subjects at both GCSE and A-Level standards. "), createVNode(VBtnToggle, {
              modelValue: level.value,
              "onUpdate:modelValue": ($event) => level.value = $event,
              mandatory: "",
              class: "level-toggle pa-2 rounded-xl bg-gray-100 d-inline-flex"
            }, {
              default: withCtx(() => [(openBlock(), createBlock(Fragment, null, renderList(["gcse", "alevel"], (lvl) => {
                return createVNode(VBtn, {
                  key: lvl,
                  value: lvl,
                  class: "text-lg font-semibold px-8 py-3 rounded-lg",
                  color: level.value === lvl ? "primary" : "",
                  variant: "flat"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(lvl === "gcse" ? "GCSE" : "A-Level"), 1)]),
                  _: 2
                }, 1032, ["value", "color"]);
              }), 64))]),
              _: 1
            }, 8, ["modelValue", "onUpdate:modelValue"])])]), createVNode(VRow, {
              class: "mb-4"
            }, {
              default: withCtx(() => [createVNode(VCol, {
                cols: "12",
                class: "text-white pa-6"
              }, {
                default: withCtx(() => [createVNode(VRow, {
                  align: "center"
                }, {
                  default: withCtx(() => [createVNode(VCol, {
                    cols: "12",
                    md: "6",
                    class: "blur-effect rounded-xl pa-6"
                  }, {
                    default: withCtx(() => [createVNode("h1", {
                      class: "text-2xl md:text-3xl font-bold mb-4"
                    }, toDisplayString(level.value === "gcse" ? "GCSE Past Papers" : "A-Level Past Papers"), 1), createVNode("p", {
                      class: "text-lg mb-6"
                    }, toDisplayString(level.value === "gcse" ? "Prepare for your GCSE exams with our extensive collection of past papers, mark schemes, and examiner reports." : "Get ready for your A-Level examinations with comprehensive past papers and detailed marking guidelines."), 1), createVNode("div", {
                      class: "stats d-flex gap-6"
                    }, [createVNode("div", {
                      class: "stat"
                    }, [createVNode("h1", {
                      class: "text-3xl font-bold mb-1"
                    }, " 12+ "), createVNode("p", {
                      class: "text-white"
                    }, " Subjects ")]), createVNode("div", {
                      class: "stat"
                    }, [createVNode("h1", {
                      class: "text-3xl font-bold mb-1"
                    }, " 5+ "), createVNode("p", {
                      class: "text-white"
                    }, " Exam Boards ")]), createVNode("div", {
                      class: "stat"
                    }, [createVNode("h1", {
                      class: "text-3xl font-bold mb-1"
                    }, " 200+ "), createVNode("p", {
                      class: "text-white"
                    }, " Papers ")])])]),
                    _: 1
                  }), createVNode(VCol, {
                    cols: "12",
                    md: "6",
                    class: "d-flex justify-center"
                  }, {
                    default: withCtx(() => [createVNode("img", {
                      src: _imports_0,
                      alt: "Level Image",
                      style: {
                        "width": "100%",
                        "max-width": "400px"
                      }
                    })]),
                    _: 1
                  })]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            }), createVNode(VRow, null, {
              default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(subjects.value, (subject) => {
                return openBlock(), createBlock(VCol, {
                  key: subject,
                  cols: "12",
                  sm: "6",
                  md: "4",
                  class: "mb-6"
                }, {
                  default: withCtx(() => [createVNode(VCard, {
                    class: ["subject-card h-100 rounded-xl", `border-${subjectColors.value[subject]}`]
                  }, {
                    default: withCtx(() => [createVNode("div", {
                      class: "subject-header pa-6",
                      style: {
                        backgroundColor: `${subjectColors.value[subject]}15`
                      }
                    }, [createVNode("h1", {
                      class: "text-xl font-bold",
                      style: {
                        color: subjectColors.value[subject]
                      }
                    }, toDisplayString(subject), 5)], 4), createVNode(VCardText, {
                      class: "pa-6"
                    }, {
                      default: withCtx(() => [createVNode(VChipGroup, {
                        modelValue: selectedTypes[subject],
                        "onUpdate:modelValue": ($event) => selectedTypes[subject] = $event,
                        class: "mb-4 justify-center",
                        column: ""
                      }, {
                        default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(getSubjectTypes(subject), (type) => {
                          return openBlock(), createBlock(VChip, {
                            key: type,
                            value: type,
                            color: subjectColors.value[subject],
                            variant: "outlined",
                            class: "ma-1",
                            filter: ""
                          }, {
                            default: withCtx(() => [createVNode("p", null, toDisplayString(type), 1)]),
                            _: 2
                          }, 1032, ["value", "color"]);
                        }), 128))]),
                        _: 2
                      }, 1032, ["modelValue", "onUpdate:modelValue"]), selectedTypes[subject] ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "selected-content"
                      }, [createVNode(VExpansionPanels, null, {
                        default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(getExamBoards(subject, selectedTypes[subject]), (board) => {
                          return openBlock(), createBlock(VExpansionPanel, {
                            key: board.name
                          }, {
                            default: withCtx(() => [createVNode(VExpansionPanelTitle, null, {
                              default: withCtx(() => [createVNode("h1", null, toDisplayString(board.name), 1)]),
                              _: 2
                            }, 1024), createVNode(VExpansionPanelText, null, {
                              default: withCtx(() => [createVNode("div", {
                                class: "paper-list"
                              }, [(openBlock(true), createBlock(Fragment, null, renderList(board.papers, (paper) => {
                                return openBlock(), createBlock("div", {
                                  key: paper,
                                  class: "paper-item pa-3 d-flex justify-space-between align-center"
                                }, [createVNode("p", null, toDisplayString(paper), 1), createVNode(VBtn, {
                                  color: subjectColors.value[subject],
                                  variant: "text",
                                  density: "comfortable",
                                  onClick: ($event) => openPastPaper(level.value, subject, selectedTypes[subject], board.name, paper)
                                }, {
                                  default: withCtx(() => [createTextVNode(" View Paper ")]),
                                  _: 2
                                }, 1032, ["color", "onClick"])]);
                              }), 128))])]),
                              _: 2
                            }, 1024)]),
                            _: 2
                          }, 1024);
                        }), 128))]),
                        _: 2
                      }, 1024)])) : createCommentVNode("", true)]),
                      _: 2
                    }, 1024)]),
                    _: 2
                  }, 1032, ["class"])]),
                  _: 2
                }, 1024);
              }), 128))]),
              _: 1
            })];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PastPaperSelection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PastPaperSelection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ca17f45d"]]);
const _sfc_main = {
  __name: "past-papers-selector",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const isLoggedIn = computed(() => !!userStore.getUser);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CallToAction = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "full-width"
      }, _attrs))} data-v-37411715><section class="past-paper-selector" data-v-37411715>`);
      _push(ssrRenderComponent(VContainer, {
        fluid: "",
        class: "pa-0",
        "data-aos": "fade-up",
        "data-aos-duration": "300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PastPaperSelection, null, null, _parent2, _scopeId));
          } else {
            return [createVNode(PastPaperSelection)];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section data-v-37411715>`);
      _push(ssrRenderComponent(VContainer, {
        fluid: "",
        class: "pa-0",
        "data-aos": "fade-up",
        "data-aos-duration": "300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(FAQ, null, null, _parent2, _scopeId));
          } else {
            return [createVNode(FAQ)];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
      if (!unref(isLoggedIn)) {
        _push(`<section data-v-37411715>`);
        _push(ssrRenderComponent(VContainer, {
          class: "pa-0",
          fluid: "",
          "data-aos": "fade-up",
          "data-aos-duration": "300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="content-wrapper" data-v-37411715${_scopeId}>`);
              _push2(ssrRenderComponent(_component_CallToAction, {
                "start-color": "#0f172a",
                "end-color": "#f6f6ff"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [createVNode("div", {
                class: "content-wrapper"
              }, [createVNode(_component_CallToAction, {
                "start-color": "#0f172a",
                "end-color": "#f6f6ff"
              })])];
            }
          }),
          _: 1
        }, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/past-papers-selector.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pastPapersSelector = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-37411715"]]);

export { pastPapersSelector as default };
//# sourceMappingURL=past-papers-selector-D7iTTI7u.mjs.map
