import { _ as __nuxt_component_0 } from './CallToAction-KwccuGOk.mjs';
import { computed, ref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { _ as _export_sfc, V as VContainer, t as VBtn, g as VProgressCircular, h as VAlert, j as VCard, W as VTabs, X as VTab, Y as VWindow, Z as VWindowItem, k as VCardText, l as VList, m as VListItem, o as VIcon, p as VListItemTitle, b as useNuxtApp, S as ref$1, T as listAll, U as getDownloadURL } from './server.mjs';
import { u as useUserStore } from './user-WKIwKJhJ.mjs';
import './logo-Bfw0K8zp.mjs';
import '../routes/renderer.mjs';
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
import 'pinia-plugin-persistedstate';
import 'idb';
import 'tslib';
import 'undici';
import 'util';
import 'crypto';
import '@grpc/grpc-js';
import '@grpc/proto-loader';

function useFirebaseStorage() {
  const {
    $firebaseStorage
  } = useNuxtApp();
  const listPapers = async (path) => {
    const listRef = ref$1($firebaseStorage, path);
    try {
      const res = await listAll(listRef);
      return res.items.map((item) => item.name);
    } catch (error) {
      console.error("Error listing papers:", error);
      return [];
    }
  };
  const getPDFUrl = async (path) => {
    const fileRef = ref$1($firebaseStorage, path);
    try {
      const url = await getDownloadURL(fileRef);
      return url;
    } catch (error) {
      console.error("Error getting download URL:", error.code, error.message);
      throw error;
    }
  };
  return {
    listPapers,
    getPDFUrl
  };
}
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const isLoggedIn = computed(() => !!userStore.getUser);
    const route = useRoute();
    useRouter();
    const {
      listPapers,
      getPDFUrl
    } = useFirebaseStorage();
    const activeTab = ref("foundation");
    const foundationPapers = ref([]);
    const higherPapers = ref([]);
    const isLoading = ref(true);
    const error = ref(null);
    const subjectName = computed(() => {
      const params = route.params.id.split("-");
      if (params.length < 2)
        return "Unknown Subject";
      const [subject, board] = params;
      return `${subject.charAt(0).toUpperCase() + subject.slice(1)} (${board.toUpperCase()})`;
    });
    const selectPaper = async (paper, level) => {
      if (!paper)
        return;
      try {
        const params = route.params.id.split("-");
        const [education, subject, type, board, examPaper, examPaperNumber] = params;
        const path = `${education}/${subject}/${type}/${board}/${examPaper}${examPaperNumber}/${level}/${paper}`;
        const pdfUrl = await getPDFUrl(path);
        (void 0).open(pdfUrl, "_blank");
      } catch (error2) {
        console.error("Error loading PDF: ", error2);
        alert("Failed to load the PDF. Please try again.");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CallToAction = __nuxt_component_0;
      _push(`<!--[--><section class="past-paper-background" data-v-22d4286c>`);
      _push(ssrRenderComponent(VContainer, {
        fluid: "",
        class: "max-width-1600 py-24 px-4 px-lg-12"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center mb-8" data-v-22d4286c${_scopeId}><div class="blur-effect pa-6 rounded-xl text-white mx-auto" data-v-22d4286c${_scopeId}>`);
            _push2(ssrRenderComponent(VBtn, {
              color: "white",
              variant: "flat",
              class: "mb-6",
              "prepend-icon": "mdi-arrow-left",
              onClick: ($event) => _ctx.$router.push("/past-papers-selector")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Back to Selection `);
                } else {
                  return [createTextVNode(" Back to Selection ")];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<h1 class="text-4xl md:text-5xl font-bold mb-6" data-v-22d4286c${_scopeId}>${ssrInterpolate(subjectName.value)} Past Papers </h1></div></div>`);
            if (isLoading.value) {
              _push2(`<div class="d-flex justify-center align-center py-12" data-v-22d4286c${_scopeId}>`);
              _push2(ssrRenderComponent(VProgressCircular, {
                indeterminate: "",
                color: "primary",
                size: "64"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else if (error.value) {
              _push2(`<div class="text-center py-12" data-v-22d4286c${_scopeId}>`);
              _push2(ssrRenderComponent(VAlert, {
                type: "error",
                class: "mb-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(error.value)}`);
                  } else {
                    return [createTextVNode(toDisplayString(error.value), 1)];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VBtn, {
                color: "primary",
                onClick: ($event) => _ctx.$router.push("/pastpapersselector")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Return to paper selection `);
                  } else {
                    return [createTextVNode(" Return to paper selection ")];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(ssrRenderComponent(VCard, {
                class: "papers-card rounded-xl overflow-hidden"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VTabs, {
                      modelValue: activeTab.value,
                      "onUpdate:modelValue": ($event) => activeTab.value = $event,
                      color: "primary",
                      grow: "",
                      class: "papers-tabs"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VTab, {
                            value: "foundation",
                            class: "text-lg font-semibold"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Foundation `);
                              } else {
                                return [createTextVNode(" Foundation ")];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VTab, {
                            value: "higher",
                            class: "text-lg font-semibold"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Higher `);
                              } else {
                                return [createTextVNode(" Higher ")];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [createVNode(VTab, {
                            value: "foundation",
                            class: "text-lg font-semibold"
                          }, {
                            default: withCtx(() => [createTextVNode(" Foundation ")]),
                            _: 1
                          }), createVNode(VTab, {
                            value: "higher",
                            class: "text-lg font-semibold"
                          }, {
                            default: withCtx(() => [createTextVNode(" Higher ")]),
                            _: 1
                          })];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VWindow, {
                      modelValue: activeTab.value,
                      "onUpdate:modelValue": ($event) => activeTab.value = $event
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(["foundation", "higher"], (type) => {
                            _push4(ssrRenderComponent(VWindowItem, {
                              key: type,
                              value: type
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VCardText, {
                                    class: "pa-6"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        if (type === "foundation" ? foundationPapers.value.length : higherPapers.value.length) {
                                          _push6(ssrRenderComponent(VList, {
                                            class: "papers-list"
                                          }, {
                                            default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(`<!--[-->`);
                                                ssrRenderList(type === "foundation" ? foundationPapers.value : higherPapers.value, (paper) => {
                                                  _push7(ssrRenderComponent(VListItem, {
                                                    key: paper.date,
                                                    class: "paper-item mb-4 rounded-lg"
                                                  }, {
                                                    prepend: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                      if (_push8) {
                                                        _push8(ssrRenderComponent(VIcon, {
                                                          size: "large",
                                                          color: "primary",
                                                          class: "mr-4"
                                                        }, {
                                                          default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                            if (_push9) {
                                                              _push9(` mdi-file-document-outline `);
                                                            } else {
                                                              return [createTextVNode(" mdi-file-document-outline ")];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent8, _scopeId7));
                                                      } else {
                                                        return [createVNode(VIcon, {
                                                          size: "large",
                                                          color: "primary",
                                                          class: "mr-4"
                                                        }, {
                                                          default: withCtx(() => [createTextVNode(" mdi-file-document-outline ")]),
                                                          _: 1
                                                        })];
                                                      }
                                                    }),
                                                    append: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                      if (_push8) {
                                                        _push8(`<div class="d-flex gap-2" data-v-22d4286c${_scopeId7}>`);
                                                        if (paper.qp) {
                                                          _push8(ssrRenderComponent(VBtn, {
                                                            color: "primary",
                                                            variant: "outlined",
                                                            onClick: ($event) => selectPaper(paper.qp, type)
                                                          }, {
                                                            default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                              if (_push9) {
                                                                _push9(` Question Paper `);
                                                              } else {
                                                                return [createTextVNode(" Question Paper ")];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent8, _scopeId7));
                                                        } else {
                                                          _push8(`<!---->`);
                                                        }
                                                        if (paper.ms) {
                                                          _push8(ssrRenderComponent(VBtn, {
                                                            color: "success",
                                                            variant: "outlined",
                                                            onClick: ($event) => selectPaper(paper.ms, type)
                                                          }, {
                                                            default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                              if (_push9) {
                                                                _push9(` Mark Scheme `);
                                                              } else {
                                                                return [createTextVNode(" Mark Scheme ")];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent8, _scopeId7));
                                                        } else {
                                                          _push8(`<!---->`);
                                                        }
                                                        _push8(`</div>`);
                                                      } else {
                                                        return [createVNode("div", {
                                                          class: "d-flex gap-2"
                                                        }, [paper.qp ? (openBlock(), createBlock(VBtn, {
                                                          key: 0,
                                                          color: "primary",
                                                          variant: "outlined",
                                                          onClick: ($event) => selectPaper(paper.qp, type)
                                                        }, {
                                                          default: withCtx(() => [createTextVNode(" Question Paper ")]),
                                                          _: 2
                                                        }, 1032, ["onClick"])) : createCommentVNode("", true), paper.ms ? (openBlock(), createBlock(VBtn, {
                                                          key: 1,
                                                          color: "success",
                                                          variant: "outlined",
                                                          onClick: ($event) => selectPaper(paper.ms, type)
                                                        }, {
                                                          default: withCtx(() => [createTextVNode(" Mark Scheme ")]),
                                                          _: 2
                                                        }, 1032, ["onClick"])) : createCommentVNode("", true)])];
                                                      }
                                                    }),
                                                    default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                      if (_push8) {
                                                        _push8(ssrRenderComponent(VListItemTitle, {
                                                          class: "text-h6 font-weight-bold mb-2"
                                                        }, {
                                                          default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                            if (_push9) {
                                                              _push9(`${ssrInterpolate(paper.date)}`);
                                                            } else {
                                                              return [createTextVNode(toDisplayString(paper.date), 1)];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent8, _scopeId7));
                                                      } else {
                                                        return [createVNode(VListItemTitle, {
                                                          class: "text-h6 font-weight-bold mb-2"
                                                        }, {
                                                          default: withCtx(() => [createTextVNode(toDisplayString(paper.date), 1)]),
                                                          _: 2
                                                        }, 1024)];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent7, _scopeId6));
                                                });
                                                _push7(`<!--]-->`);
                                              } else {
                                                return [(openBlock(true), createBlock(Fragment, null, renderList(type === "foundation" ? foundationPapers.value : higherPapers.value, (paper) => {
                                                  return openBlock(), createBlock(VListItem, {
                                                    key: paper.date,
                                                    class: "paper-item mb-4 rounded-lg"
                                                  }, {
                                                    prepend: withCtx(() => [createVNode(VIcon, {
                                                      size: "large",
                                                      color: "primary",
                                                      class: "mr-4"
                                                    }, {
                                                      default: withCtx(() => [createTextVNode(" mdi-file-document-outline ")]),
                                                      _: 1
                                                    })]),
                                                    append: withCtx(() => [createVNode("div", {
                                                      class: "d-flex gap-2"
                                                    }, [paper.qp ? (openBlock(), createBlock(VBtn, {
                                                      key: 0,
                                                      color: "primary",
                                                      variant: "outlined",
                                                      onClick: ($event) => selectPaper(paper.qp, type)
                                                    }, {
                                                      default: withCtx(() => [createTextVNode(" Question Paper ")]),
                                                      _: 2
                                                    }, 1032, ["onClick"])) : createCommentVNode("", true), paper.ms ? (openBlock(), createBlock(VBtn, {
                                                      key: 1,
                                                      color: "success",
                                                      variant: "outlined",
                                                      onClick: ($event) => selectPaper(paper.ms, type)
                                                    }, {
                                                      default: withCtx(() => [createTextVNode(" Mark Scheme ")]),
                                                      _: 2
                                                    }, 1032, ["onClick"])) : createCommentVNode("", true)])]),
                                                    default: withCtx(() => [createVNode(VListItemTitle, {
                                                      class: "text-h6 font-weight-bold mb-2"
                                                    }, {
                                                      default: withCtx(() => [createTextVNode(toDisplayString(paper.date), 1)]),
                                                      _: 2
                                                    }, 1024)]),
                                                    _: 2
                                                  }, 1024);
                                                }), 128))];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                        } else {
                                          _push6(ssrRenderComponent(VAlert, {
                                            type: "info",
                                            class: "mt-4"
                                          }, {
                                            default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(` No ${ssrInterpolate(type)} papers available. `);
                                              } else {
                                                return [createTextVNode(" No " + toDisplayString(type) + " papers available. ", 1)];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                        }
                                      } else {
                                        return [(type === "foundation" ? foundationPapers.value.length : higherPapers.value.length) ? (openBlock(), createBlock(VList, {
                                          key: 0,
                                          class: "papers-list"
                                        }, {
                                          default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(type === "foundation" ? foundationPapers.value : higherPapers.value, (paper) => {
                                            return openBlock(), createBlock(VListItem, {
                                              key: paper.date,
                                              class: "paper-item mb-4 rounded-lg"
                                            }, {
                                              prepend: withCtx(() => [createVNode(VIcon, {
                                                size: "large",
                                                color: "primary",
                                                class: "mr-4"
                                              }, {
                                                default: withCtx(() => [createTextVNode(" mdi-file-document-outline ")]),
                                                _: 1
                                              })]),
                                              append: withCtx(() => [createVNode("div", {
                                                class: "d-flex gap-2"
                                              }, [paper.qp ? (openBlock(), createBlock(VBtn, {
                                                key: 0,
                                                color: "primary",
                                                variant: "outlined",
                                                onClick: ($event) => selectPaper(paper.qp, type)
                                              }, {
                                                default: withCtx(() => [createTextVNode(" Question Paper ")]),
                                                _: 2
                                              }, 1032, ["onClick"])) : createCommentVNode("", true), paper.ms ? (openBlock(), createBlock(VBtn, {
                                                key: 1,
                                                color: "success",
                                                variant: "outlined",
                                                onClick: ($event) => selectPaper(paper.ms, type)
                                              }, {
                                                default: withCtx(() => [createTextVNode(" Mark Scheme ")]),
                                                _: 2
                                              }, 1032, ["onClick"])) : createCommentVNode("", true)])]),
                                              default: withCtx(() => [createVNode(VListItemTitle, {
                                                class: "text-h6 font-weight-bold mb-2"
                                              }, {
                                                default: withCtx(() => [createTextVNode(toDisplayString(paper.date), 1)]),
                                                _: 2
                                              }, 1024)]),
                                              _: 2
                                            }, 1024);
                                          }), 128))]),
                                          _: 2
                                        }, 1024)) : (openBlock(), createBlock(VAlert, {
                                          key: 1,
                                          type: "info",
                                          class: "mt-4"
                                        }, {
                                          default: withCtx(() => [createTextVNode(" No " + toDisplayString(type) + " papers available. ", 1)]),
                                          _: 2
                                        }, 1024))];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [createVNode(VCardText, {
                                    class: "pa-6"
                                  }, {
                                    default: withCtx(() => [(type === "foundation" ? foundationPapers.value.length : higherPapers.value.length) ? (openBlock(), createBlock(VList, {
                                      key: 0,
                                      class: "papers-list"
                                    }, {
                                      default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(type === "foundation" ? foundationPapers.value : higherPapers.value, (paper) => {
                                        return openBlock(), createBlock(VListItem, {
                                          key: paper.date,
                                          class: "paper-item mb-4 rounded-lg"
                                        }, {
                                          prepend: withCtx(() => [createVNode(VIcon, {
                                            size: "large",
                                            color: "primary",
                                            class: "mr-4"
                                          }, {
                                            default: withCtx(() => [createTextVNode(" mdi-file-document-outline ")]),
                                            _: 1
                                          })]),
                                          append: withCtx(() => [createVNode("div", {
                                            class: "d-flex gap-2"
                                          }, [paper.qp ? (openBlock(), createBlock(VBtn, {
                                            key: 0,
                                            color: "primary",
                                            variant: "outlined",
                                            onClick: ($event) => selectPaper(paper.qp, type)
                                          }, {
                                            default: withCtx(() => [createTextVNode(" Question Paper ")]),
                                            _: 2
                                          }, 1032, ["onClick"])) : createCommentVNode("", true), paper.ms ? (openBlock(), createBlock(VBtn, {
                                            key: 1,
                                            color: "success",
                                            variant: "outlined",
                                            onClick: ($event) => selectPaper(paper.ms, type)
                                          }, {
                                            default: withCtx(() => [createTextVNode(" Mark Scheme ")]),
                                            _: 2
                                          }, 1032, ["onClick"])) : createCommentVNode("", true)])]),
                                          default: withCtx(() => [createVNode(VListItemTitle, {
                                            class: "text-h6 font-weight-bold mb-2"
                                          }, {
                                            default: withCtx(() => [createTextVNode(toDisplayString(paper.date), 1)]),
                                            _: 2
                                          }, 1024)]),
                                          _: 2
                                        }, 1024);
                                      }), 128))]),
                                      _: 2
                                    }, 1024)) : (openBlock(), createBlock(VAlert, {
                                      key: 1,
                                      type: "info",
                                      class: "mt-4"
                                    }, {
                                      default: withCtx(() => [createTextVNode(" No " + toDisplayString(type) + " papers available. ", 1)]),
                                      _: 2
                                    }, 1024))]),
                                    _: 2
                                  }, 1024)];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [(openBlock(), createBlock(Fragment, null, renderList(["foundation", "higher"], (type) => {
                            return createVNode(VWindowItem, {
                              key: type,
                              value: type
                            }, {
                              default: withCtx(() => [createVNode(VCardText, {
                                class: "pa-6"
                              }, {
                                default: withCtx(() => [(type === "foundation" ? foundationPapers.value.length : higherPapers.value.length) ? (openBlock(), createBlock(VList, {
                                  key: 0,
                                  class: "papers-list"
                                }, {
                                  default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(type === "foundation" ? foundationPapers.value : higherPapers.value, (paper) => {
                                    return openBlock(), createBlock(VListItem, {
                                      key: paper.date,
                                      class: "paper-item mb-4 rounded-lg"
                                    }, {
                                      prepend: withCtx(() => [createVNode(VIcon, {
                                        size: "large",
                                        color: "primary",
                                        class: "mr-4"
                                      }, {
                                        default: withCtx(() => [createTextVNode(" mdi-file-document-outline ")]),
                                        _: 1
                                      })]),
                                      append: withCtx(() => [createVNode("div", {
                                        class: "d-flex gap-2"
                                      }, [paper.qp ? (openBlock(), createBlock(VBtn, {
                                        key: 0,
                                        color: "primary",
                                        variant: "outlined",
                                        onClick: ($event) => selectPaper(paper.qp, type)
                                      }, {
                                        default: withCtx(() => [createTextVNode(" Question Paper ")]),
                                        _: 2
                                      }, 1032, ["onClick"])) : createCommentVNode("", true), paper.ms ? (openBlock(), createBlock(VBtn, {
                                        key: 1,
                                        color: "success",
                                        variant: "outlined",
                                        onClick: ($event) => selectPaper(paper.ms, type)
                                      }, {
                                        default: withCtx(() => [createTextVNode(" Mark Scheme ")]),
                                        _: 2
                                      }, 1032, ["onClick"])) : createCommentVNode("", true)])]),
                                      default: withCtx(() => [createVNode(VListItemTitle, {
                                        class: "text-h6 font-weight-bold mb-2"
                                      }, {
                                        default: withCtx(() => [createTextVNode(toDisplayString(paper.date), 1)]),
                                        _: 2
                                      }, 1024)]),
                                      _: 2
                                    }, 1024);
                                  }), 128))]),
                                  _: 2
                                }, 1024)) : (openBlock(), createBlock(VAlert, {
                                  key: 1,
                                  type: "info",
                                  class: "mt-4"
                                }, {
                                  default: withCtx(() => [createTextVNode(" No " + toDisplayString(type) + " papers available. ", 1)]),
                                  _: 2
                                }, 1024))]),
                                _: 2
                              }, 1024)]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 64))];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [createVNode(VTabs, {
                      modelValue: activeTab.value,
                      "onUpdate:modelValue": ($event) => activeTab.value = $event,
                      color: "primary",
                      grow: "",
                      class: "papers-tabs"
                    }, {
                      default: withCtx(() => [createVNode(VTab, {
                        value: "foundation",
                        class: "text-lg font-semibold"
                      }, {
                        default: withCtx(() => [createTextVNode(" Foundation ")]),
                        _: 1
                      }), createVNode(VTab, {
                        value: "higher",
                        class: "text-lg font-semibold"
                      }, {
                        default: withCtx(() => [createTextVNode(" Higher ")]),
                        _: 1
                      })]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(VWindow, {
                      modelValue: activeTab.value,
                      "onUpdate:modelValue": ($event) => activeTab.value = $event
                    }, {
                      default: withCtx(() => [(openBlock(), createBlock(Fragment, null, renderList(["foundation", "higher"], (type) => {
                        return createVNode(VWindowItem, {
                          key: type,
                          value: type
                        }, {
                          default: withCtx(() => [createVNode(VCardText, {
                            class: "pa-6"
                          }, {
                            default: withCtx(() => [(type === "foundation" ? foundationPapers.value.length : higherPapers.value.length) ? (openBlock(), createBlock(VList, {
                              key: 0,
                              class: "papers-list"
                            }, {
                              default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(type === "foundation" ? foundationPapers.value : higherPapers.value, (paper) => {
                                return openBlock(), createBlock(VListItem, {
                                  key: paper.date,
                                  class: "paper-item mb-4 rounded-lg"
                                }, {
                                  prepend: withCtx(() => [createVNode(VIcon, {
                                    size: "large",
                                    color: "primary",
                                    class: "mr-4"
                                  }, {
                                    default: withCtx(() => [createTextVNode(" mdi-file-document-outline ")]),
                                    _: 1
                                  })]),
                                  append: withCtx(() => [createVNode("div", {
                                    class: "d-flex gap-2"
                                  }, [paper.qp ? (openBlock(), createBlock(VBtn, {
                                    key: 0,
                                    color: "primary",
                                    variant: "outlined",
                                    onClick: ($event) => selectPaper(paper.qp, type)
                                  }, {
                                    default: withCtx(() => [createTextVNode(" Question Paper ")]),
                                    _: 2
                                  }, 1032, ["onClick"])) : createCommentVNode("", true), paper.ms ? (openBlock(), createBlock(VBtn, {
                                    key: 1,
                                    color: "success",
                                    variant: "outlined",
                                    onClick: ($event) => selectPaper(paper.ms, type)
                                  }, {
                                    default: withCtx(() => [createTextVNode(" Mark Scheme ")]),
                                    _: 2
                                  }, 1032, ["onClick"])) : createCommentVNode("", true)])]),
                                  default: withCtx(() => [createVNode(VListItemTitle, {
                                    class: "text-h6 font-weight-bold mb-2"
                                  }, {
                                    default: withCtx(() => [createTextVNode(toDisplayString(paper.date), 1)]),
                                    _: 2
                                  }, 1024)]),
                                  _: 2
                                }, 1024);
                              }), 128))]),
                              _: 2
                            }, 1024)) : (openBlock(), createBlock(VAlert, {
                              key: 1,
                              type: "info",
                              class: "mt-4"
                            }, {
                              default: withCtx(() => [createTextVNode(" No " + toDisplayString(type) + " papers available. ", 1)]),
                              _: 2
                            }, 1024))]),
                            _: 2
                          }, 1024)]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 64))]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
          } else {
            return [createVNode("div", {
              class: "text-center mb-8"
            }, [createVNode("div", {
              class: "blur-effect pa-6 rounded-xl text-white mx-auto"
            }, [createVNode(VBtn, {
              color: "white",
              variant: "flat",
              class: "mb-6",
              "prepend-icon": "mdi-arrow-left",
              onClick: ($event) => _ctx.$router.push("/past-papers-selector")
            }, {
              default: withCtx(() => [createTextVNode(" Back to Selection ")]),
              _: 1
            }, 8, ["onClick"]), createVNode("h1", {
              class: "text-4xl md:text-5xl font-bold mb-6"
            }, toDisplayString(subjectName.value) + " Past Papers ", 1)])]), isLoading.value ? (openBlock(), createBlock("div", {
              key: 0,
              class: "d-flex justify-center align-center py-12"
            }, [createVNode(VProgressCircular, {
              indeterminate: "",
              color: "primary",
              size: "64"
            })])) : error.value ? (openBlock(), createBlock("div", {
              key: 1,
              class: "text-center py-12"
            }, [createVNode(VAlert, {
              type: "error",
              class: "mb-6"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(error.value), 1)]),
              _: 1
            }), createVNode(VBtn, {
              color: "primary",
              onClick: ($event) => _ctx.$router.push("/pastpapersselector")
            }, {
              default: withCtx(() => [createTextVNode(" Return to paper selection ")]),
              _: 1
            }, 8, ["onClick"])])) : (openBlock(), createBlock(VCard, {
              key: 2,
              class: "papers-card rounded-xl overflow-hidden"
            }, {
              default: withCtx(() => [createVNode(VTabs, {
                modelValue: activeTab.value,
                "onUpdate:modelValue": ($event) => activeTab.value = $event,
                color: "primary",
                grow: "",
                class: "papers-tabs"
              }, {
                default: withCtx(() => [createVNode(VTab, {
                  value: "foundation",
                  class: "text-lg font-semibold"
                }, {
                  default: withCtx(() => [createTextVNode(" Foundation ")]),
                  _: 1
                }), createVNode(VTab, {
                  value: "higher",
                  class: "text-lg font-semibold"
                }, {
                  default: withCtx(() => [createTextVNode(" Higher ")]),
                  _: 1
                })]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(VWindow, {
                modelValue: activeTab.value,
                "onUpdate:modelValue": ($event) => activeTab.value = $event
              }, {
                default: withCtx(() => [(openBlock(), createBlock(Fragment, null, renderList(["foundation", "higher"], (type) => {
                  return createVNode(VWindowItem, {
                    key: type,
                    value: type
                  }, {
                    default: withCtx(() => [createVNode(VCardText, {
                      class: "pa-6"
                    }, {
                      default: withCtx(() => [(type === "foundation" ? foundationPapers.value.length : higherPapers.value.length) ? (openBlock(), createBlock(VList, {
                        key: 0,
                        class: "papers-list"
                      }, {
                        default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(type === "foundation" ? foundationPapers.value : higherPapers.value, (paper) => {
                          return openBlock(), createBlock(VListItem, {
                            key: paper.date,
                            class: "paper-item mb-4 rounded-lg"
                          }, {
                            prepend: withCtx(() => [createVNode(VIcon, {
                              size: "large",
                              color: "primary",
                              class: "mr-4"
                            }, {
                              default: withCtx(() => [createTextVNode(" mdi-file-document-outline ")]),
                              _: 1
                            })]),
                            append: withCtx(() => [createVNode("div", {
                              class: "d-flex gap-2"
                            }, [paper.qp ? (openBlock(), createBlock(VBtn, {
                              key: 0,
                              color: "primary",
                              variant: "outlined",
                              onClick: ($event) => selectPaper(paper.qp, type)
                            }, {
                              default: withCtx(() => [createTextVNode(" Question Paper ")]),
                              _: 2
                            }, 1032, ["onClick"])) : createCommentVNode("", true), paper.ms ? (openBlock(), createBlock(VBtn, {
                              key: 1,
                              color: "success",
                              variant: "outlined",
                              onClick: ($event) => selectPaper(paper.ms, type)
                            }, {
                              default: withCtx(() => [createTextVNode(" Mark Scheme ")]),
                              _: 2
                            }, 1032, ["onClick"])) : createCommentVNode("", true)])]),
                            default: withCtx(() => [createVNode(VListItemTitle, {
                              class: "text-h6 font-weight-bold mb-2"
                            }, {
                              default: withCtx(() => [createTextVNode(toDisplayString(paper.date), 1)]),
                              _: 2
                            }, 1024)]),
                            _: 2
                          }, 1024);
                        }), 128))]),
                        _: 2
                      }, 1024)) : (openBlock(), createBlock(VAlert, {
                        key: 1,
                        type: "info",
                        class: "mt-4"
                      }, {
                        default: withCtx(() => [createTextVNode(" No " + toDisplayString(type) + " papers available. ", 1)]),
                        _: 2
                      }, 1024))]),
                      _: 2
                    }, 1024)]),
                    _: 2
                  }, 1032, ["value"]);
                }), 64))]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])]),
              _: 1
            }))];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
      if (!isLoggedIn.value) {
        _push(`<section data-v-22d4286c>`);
        _push(ssrRenderComponent(VContainer, {
          class: "pa-0",
          fluid: "",
          "data-aos": "fade-up",
          "data-aos-duration": "300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="content-wrapper" data-v-22d4286c${_scopeId}>`);
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
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pastpapers/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-22d4286c"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-CL1j2kpP.mjs.map
