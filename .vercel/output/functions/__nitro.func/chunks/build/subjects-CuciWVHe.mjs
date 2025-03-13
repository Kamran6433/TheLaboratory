import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0 } from './BookTuition-DnszmD09.mjs';
import { _ as __nuxt_component_0$1 } from './CallToAction-KwccuGOk.mjs';
import { F as FAQ } from './FAQ-C9-s_t0y.mjs';
import { G as GetInTouch } from './GetInTouch-CNVAZ0YB.mjs';
import { useSSRContext, computed, mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, V as VContainer, e as VRow, f as VCol, j as VCard, o as VIcon } from './server.mjs';
import { _ as _imports_0$1 } from './Saly-4-DiJTyKVP.mjs';
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
import 'vue-router';
import 'pinia-plugin-persistedstate';
import 'idb';
import 'tslib';
import 'undici';
import 'util';
import 'crypto';
import '@grpc/grpc-js';
import '@grpc/proto-loader';

const _imports_0 = "" + buildAssetsURL("Saly-14.KrbZkPTN.png");
const _sfc_main$2 = {
  __name: "InfoBox",
  __ssrInlineRender: true,
  setup(__props) {
    const academicLevels = [{
      name: "A-Levels",
      icon: "mdi-school",
      description: "Advanced level qualifications for university entry",
      bgClass: "bg-light-blue-lighten-5"
    }, {
      name: "GCSE",
      icon: "mdi-book-open-variant",
      description: "General Certificate of Secondary Education preparation",
      bgClass: "bg-purple-lighten-5"
    }];
    const subjects2 = [{
      name: "Mathematics",
      icon: "mdi-calculator",
      bgClass: "bg-pink-lighten-5"
    }, {
      name: "Chemistry",
      icon: "mdi-flask",
      bgClass: "bg-amber-lighten-5"
    }, {
      name: "Physics",
      icon: "mdi-atom",
      bgClass: "bg-blue-lighten-5"
    }, {
      name: "Biology",
      icon: "mdi-dna",
      bgClass: "bg-green-lighten-5"
    }, {
      name: "English",
      icon: "mdi-book",
      bgClass: "bg-deep-purple-lighten-5"
    }, {
      name: "Computer Science",
      icon: "mdi-laptop",
      bgClass: "bg-cyan-lighten-5"
    }, {
      name: "Economics",
      icon: "mdi-chart-line",
      bgClass: "bg-orange-lighten-5"
    }, {
      name: "History",
      icon: "mdi-clock-time-four",
      bgClass: "bg-brown-lighten-5"
    }];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({
        fluid: "",
        class: "max-width-1600 py-24 px-4 px-lg-12"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, {
              class: "mb-12"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6",
                    class: "d-flex justify-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_0)} alt="Subject Illustration" class="max-w-full h-auto object-contain" style="${ssrRenderStyle({
                          "max-width": "400px"
                        })}" data-v-e19abd25${_scopeId3}>`);
                      } else {
                        return [createVNode("img", {
                          src: _imports_0,
                          alt: "Subject Illustration",
                          class: "max-w-full h-auto object-contain",
                          style: {
                            "max-width": "400px"
                          }
                        })];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6",
                    class: "d-flex flex-column justify-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="landing text-black pa-6 rounded-xl" data-v-e19abd25${_scopeId3}><h1 class="text-4xl md:text-5xl font-bold mb-4" data-v-e19abd25${_scopeId3}> Expert tutoring in your chosen subjects </h1><p class="text-xl md:text-2xl" data-v-e19abd25${_scopeId3}> Our experienced, background-checked tutors specialise in key academic subjects and exam preparation. </p></div>`);
                      } else {
                        return [createVNode("div", {
                          class: "landing text-black pa-6 rounded-xl"
                        }, [createVNode("h1", {
                          class: "text-4xl md:text-5xl font-bold mb-4"
                        }, " Expert tutoring in your chosen subjects "), createVNode("p", {
                          class: "text-xl md:text-2xl"
                        }, " Our experienced, background-checked tutors specialise in key academic subjects and exam preparation. ")])];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [createVNode(VCol, {
                    cols: "12",
                    md: "6",
                    class: "d-flex justify-center"
                  }, {
                    default: withCtx(() => [createVNode("img", {
                      src: _imports_0,
                      alt: "Subject Illustration",
                      class: "max-w-full h-auto object-contain",
                      style: {
                        "max-width": "400px"
                      }
                    })]),
                    _: 1
                  }), createVNode(VCol, {
                    cols: "12",
                    md: "6",
                    class: "d-flex flex-column justify-center"
                  }, {
                    default: withCtx(() => [createVNode("div", {
                      class: "landing text-black pa-6 rounded-xl"
                    }, [createVNode("h1", {
                      class: "text-4xl md:text-5xl font-bold mb-4"
                    }, " Expert tutoring in your chosen subjects "), createVNode("p", {
                      class: "text-xl md:text-2xl"
                    }, " Our experienced, background-checked tutors specialise in key academic subjects and exam preparation. ")])]),
                    _: 1
                  })];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="text-3xl md:text-4xl font-bold mb-8 text-center" data-v-e19abd25${_scopeId3}> We teach </h1>`);
                      } else {
                        return [createVNode("h1", {
                          class: "text-3xl md:text-4xl font-bold mb-8 text-center"
                        }, " We teach ")];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [createVNode(VCol, {
                    cols: "12"
                  }, {
                    default: withCtx(() => [createVNode("h1", {
                      class: "text-3xl md:text-4xl font-bold mb-8 text-center"
                    }, " We teach ")]),
                    _: 1
                  })];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, {
              justify: "center",
              class: "mb-12"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(academicLevels, (level, index) => {
                    _push3(ssrRenderComponent(VCol, {
                      key: index,
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCard, {
                            class: ["subjects", ["level-card pa-6 rounded-xl text-center h-100", level.bgClass]]
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VIcon, {
                                  size: "48",
                                  class: "mb-4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(level.icon)}`);
                                    } else {
                                      return [createTextVNode(toDisplayString(level.icon), 1)];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`<h1 class="text-2xl font-bold mb-2" data-v-e19abd25${_scopeId4}>${ssrInterpolate(level.name)}</h1><p class="text-base md:text-lg" data-v-e19abd25${_scopeId4}>${ssrInterpolate(level.description)}</p>`);
                              } else {
                                return [createVNode(VIcon, {
                                  size: "48",
                                  class: "mb-4"
                                }, {
                                  default: withCtx(() => [createTextVNode(toDisplayString(level.icon), 1)]),
                                  _: 2
                                }, 1024), createVNode("h1", {
                                  class: "text-2xl font-bold mb-2"
                                }, toDisplayString(level.name), 1), createVNode("p", {
                                  class: "text-base md:text-lg"
                                }, toDisplayString(level.description), 1)];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [createVNode(VCard, {
                            class: ["subjects", ["level-card pa-6 rounded-xl text-center h-100", level.bgClass]]
                          }, {
                            default: withCtx(() => [createVNode(VIcon, {
                              size: "48",
                              class: "mb-4"
                            }, {
                              default: withCtx(() => [createTextVNode(toDisplayString(level.icon), 1)]),
                              _: 2
                            }, 1024), createVNode("h1", {
                              class: "text-2xl font-bold mb-2"
                            }, toDisplayString(level.name), 1), createVNode("p", {
                              class: "text-base md:text-lg"
                            }, toDisplayString(level.description), 1)]),
                            _: 2
                          }, 1032, ["class"])];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [(openBlock(), createBlock(Fragment, null, renderList(academicLevels, (level, index) => {
                    return createVNode(VCol, {
                      key: index,
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx(() => [createVNode(VCard, {
                        class: ["subjects", ["level-card pa-6 rounded-xl text-center h-100", level.bgClass]]
                      }, {
                        default: withCtx(() => [createVNode(VIcon, {
                          size: "48",
                          class: "mb-4"
                        }, {
                          default: withCtx(() => [createTextVNode(toDisplayString(level.icon), 1)]),
                          _: 2
                        }, 1024), createVNode("h1", {
                          class: "text-2xl font-bold mb-2"
                        }, toDisplayString(level.name), 1), createVNode("p", {
                          class: "text-base md:text-lg"
                        }, toDisplayString(level.description), 1)]),
                        _: 2
                      }, 1032, ["class"])]),
                      _: 2
                    }, 1024);
                  }), 64))];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="text-3xl md:text-4xl font-bold mb-8 text-center" data-v-e19abd25${_scopeId3}> Our Subjects </h1>`);
                      } else {
                        return [createVNode("h1", {
                          class: "text-3xl md:text-4xl font-bold mb-8 text-center"
                        }, " Our Subjects ")];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [createVNode(VCol, {
                    cols: "12"
                  }, {
                    default: withCtx(() => [createVNode("h1", {
                      class: "text-3xl md:text-4xl font-bold mb-8 text-center"
                    }, " Our Subjects ")]),
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
                  ssrRenderList(subjects2, (subject, index) => {
                    _push3(ssrRenderComponent(VCol, {
                      key: index,
                      cols: "12",
                      sm: "6",
                      md: "3"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCard, {
                            class: ["subjects", ["subject-card pa-4 rounded-xl text-center", subject.bgClass]]
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VIcon, {
                                  size: "36",
                                  class: "mb-2"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(subject.icon)}`);
                                    } else {
                                      return [createTextVNode(toDisplayString(subject.icon), 1)];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`<h1 class="text-xl font-semibold" data-v-e19abd25${_scopeId4}>${ssrInterpolate(subject.name)}</h1>`);
                              } else {
                                return [createVNode(VIcon, {
                                  size: "36",
                                  class: "mb-2"
                                }, {
                                  default: withCtx(() => [createTextVNode(toDisplayString(subject.icon), 1)]),
                                  _: 2
                                }, 1024), createVNode("h1", {
                                  class: "text-xl font-semibold"
                                }, toDisplayString(subject.name), 1)];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [createVNode(VCard, {
                            class: ["subjects", ["subject-card pa-4 rounded-xl text-center", subject.bgClass]]
                          }, {
                            default: withCtx(() => [createVNode(VIcon, {
                              size: "36",
                              class: "mb-2"
                            }, {
                              default: withCtx(() => [createTextVNode(toDisplayString(subject.icon), 1)]),
                              _: 2
                            }, 1024), createVNode("h1", {
                              class: "text-xl font-semibold"
                            }, toDisplayString(subject.name), 1)]),
                            _: 2
                          }, 1032, ["class"])];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [(openBlock(), createBlock(Fragment, null, renderList(subjects2, (subject, index) => {
                    return createVNode(VCol, {
                      key: index,
                      cols: "12",
                      sm: "6",
                      md: "3"
                    }, {
                      default: withCtx(() => [createVNode(VCard, {
                        class: ["subjects", ["subject-card pa-4 rounded-xl text-center", subject.bgClass]]
                      }, {
                        default: withCtx(() => [createVNode(VIcon, {
                          size: "36",
                          class: "mb-2"
                        }, {
                          default: withCtx(() => [createTextVNode(toDisplayString(subject.icon), 1)]),
                          _: 2
                        }, 1024), createVNode("h1", {
                          class: "text-xl font-semibold"
                        }, toDisplayString(subject.name), 1)]),
                        _: 2
                      }, 1032, ["class"])]),
                      _: 2
                    }, 1024);
                  }), 64))];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [createVNode(VRow, {
              class: "mb-12"
            }, {
              default: withCtx(() => [createVNode(VCol, {
                cols: "12",
                md: "6",
                class: "d-flex justify-center"
              }, {
                default: withCtx(() => [createVNode("img", {
                  src: _imports_0,
                  alt: "Subject Illustration",
                  class: "max-w-full h-auto object-contain",
                  style: {
                    "max-width": "400px"
                  }
                })]),
                _: 1
              }), createVNode(VCol, {
                cols: "12",
                md: "6",
                class: "d-flex flex-column justify-center"
              }, {
                default: withCtx(() => [createVNode("div", {
                  class: "landing text-black pa-6 rounded-xl"
                }, [createVNode("h1", {
                  class: "text-4xl md:text-5xl font-bold mb-4"
                }, " Expert tutoring in your chosen subjects "), createVNode("p", {
                  class: "text-xl md:text-2xl"
                }, " Our experienced, background-checked tutors specialise in key academic subjects and exam preparation. ")])]),
                _: 1
              })]),
              _: 1
            }), createVNode(VRow, null, {
              default: withCtx(() => [createVNode(VCol, {
                cols: "12"
              }, {
                default: withCtx(() => [createVNode("h1", {
                  class: "text-3xl md:text-4xl font-bold mb-8 text-center"
                }, " We teach ")]),
                _: 1
              })]),
              _: 1
            }), createVNode(VRow, {
              justify: "center",
              class: "mb-12"
            }, {
              default: withCtx(() => [(openBlock(), createBlock(Fragment, null, renderList(academicLevels, (level, index) => {
                return createVNode(VCol, {
                  key: index,
                  cols: "12",
                  md: "4"
                }, {
                  default: withCtx(() => [createVNode(VCard, {
                    class: ["subjects", ["level-card pa-6 rounded-xl text-center h-100", level.bgClass]]
                  }, {
                    default: withCtx(() => [createVNode(VIcon, {
                      size: "48",
                      class: "mb-4"
                    }, {
                      default: withCtx(() => [createTextVNode(toDisplayString(level.icon), 1)]),
                      _: 2
                    }, 1024), createVNode("h1", {
                      class: "text-2xl font-bold mb-2"
                    }, toDisplayString(level.name), 1), createVNode("p", {
                      class: "text-base md:text-lg"
                    }, toDisplayString(level.description), 1)]),
                    _: 2
                  }, 1032, ["class"])]),
                  _: 2
                }, 1024);
              }), 64))]),
              _: 1
            }), createVNode(VRow, null, {
              default: withCtx(() => [createVNode(VCol, {
                cols: "12"
              }, {
                default: withCtx(() => [createVNode("h1", {
                  class: "text-3xl md:text-4xl font-bold mb-8 text-center"
                }, " Our Subjects ")]),
                _: 1
              })]),
              _: 1
            }), createVNode(VRow, null, {
              default: withCtx(() => [(openBlock(), createBlock(Fragment, null, renderList(subjects2, (subject, index) => {
                return createVNode(VCol, {
                  key: index,
                  cols: "12",
                  sm: "6",
                  md: "3"
                }, {
                  default: withCtx(() => [createVNode(VCard, {
                    class: ["subjects", ["subject-card pa-4 rounded-xl text-center", subject.bgClass]]
                  }, {
                    default: withCtx(() => [createVNode(VIcon, {
                      size: "36",
                      class: "mb-2"
                    }, {
                      default: withCtx(() => [createTextVNode(toDisplayString(subject.icon), 1)]),
                      _: 2
                    }, 1024), createVNode("h1", {
                      class: "text-xl font-semibold"
                    }, toDisplayString(subject.name), 1)]),
                    _: 2
                  }, 1032, ["class"])]),
                  _: 2
                }, 1024);
              }), 64))]),
              _: 1
            })];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InfoBox.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const InfoBox = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e19abd25"]]);
const _imports_1 = "" + buildAssetsURL("Saly-5.CAd504nF.png");
const _imports_2 = "" + buildAssetsURL("Saly-6.Bt68GdNV.png");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VContainer, mergeProps({
    class: "max-width-1600 py-12 px-4 px-lg-12",
    fluid: ""
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="text-center mb-12" data-v-819b85d9${_scopeId}><h1 class="text-4xl md:text-5xl font-weight-bold mb-4" data-v-819b85d9${_scopeId}> Stay on track with our teaching methods </h1><p class="text-xl md:text-2xl mx-auto" style="${ssrRenderStyle({
          "max-width": "800px"
        })}" data-v-819b85d9${_scopeId}> Our comprehensive approach combines expert tutoring, continuous assessment, and personalised learning plans to ensure every student reaches their full potential in their chosen subjects. </p></div>`);
        _push2(ssrRenderComponent(VRow, {
          justify: "center"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                sm: "6",
                md: "4",
                class: "feature-item"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="blur-effect h-100 text-center pa-4 rounded-xl" data-v-819b85d9${_scopeId3}><h1 class="text-3xl md:text-4xl font-bold mb-4" data-v-819b85d9${_scopeId3}> Personalised Learning Plans </h1><p class="text-lg md:text-xl mb-6" data-v-819b85d9${_scopeId3}> Our tutors create customised study plans tailored to your learning style and academic goals. We identify areas for improvement and develop strategies to enhance your understanding and performance in each subject. </p><img${ssrRenderAttr("src", _imports_0$1)} alt="Personalized Learning" class="feature-image mx-auto" data-v-819b85d9${_scopeId3}></div>`);
                  } else {
                    return [createVNode("div", {
                      class: "blur-effect h-100 text-center pa-4 rounded-xl"
                    }, [createVNode("h1", {
                      class: "text-3xl md:text-4xl font-bold mb-4"
                    }, " Personalised Learning Plans "), createVNode("p", {
                      class: "text-lg md:text-xl mb-6"
                    }, " Our tutors create customised study plans tailored to your learning style and academic goals. We identify areas for improvement and develop strategies to enhance your understanding and performance in each subject. "), createVNode("img", {
                      src: _imports_0$1,
                      alt: "Personalized Learning",
                      class: "feature-image mx-auto"
                    })])];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                sm: "6",
                md: "4",
                class: "feature-item"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="blur-effect h-100 text-center pa-4 rounded-xl" data-v-819b85d9${_scopeId3}><h1 class="text-3xl md:text-4xl font-bold mb-4" data-v-819b85d9${_scopeId3}> Regular Progress Monitoring </h1><p class="text-lg md:text-xl mb-6" data-v-819b85d9${_scopeId3}> Track your academic journey with continuous assessment and feedback. Our tutors provide detailed progress reports and adjust teaching methods to ensure you&#39;re consistently improving and meeting your academic targets. </p><img${ssrRenderAttr("src", _imports_1)} alt="Progress Monitoring" class="feature-image mx-auto" data-v-819b85d9${_scopeId3}></div>`);
                  } else {
                    return [createVNode("div", {
                      class: "blur-effect h-100 text-center pa-4 rounded-xl"
                    }, [createVNode("h1", {
                      class: "text-3xl md:text-4xl font-bold mb-4"
                    }, " Regular Progress Monitoring "), createVNode("p", {
                      class: "text-lg md:text-xl mb-6"
                    }, " Track your academic journey with continuous assessment and feedback. Our tutors provide detailed progress reports and adjust teaching methods to ensure you're consistently improving and meeting your academic targets. "), createVNode("img", {
                      src: _imports_1,
                      alt: "Progress Monitoring",
                      class: "feature-image mx-auto"
                    })])];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                sm: "6",
                md: "4",
                class: "feature-item"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="blur-effect h-100 text-center pa-4 rounded-xl" data-v-819b85d9${_scopeId3}><h1 class="text-3xl md:text-4xl font-bold mb-4" data-v-819b85d9${_scopeId3}> Interactive Learning Experience </h1><p class="text-lg md:text-xl mb-6" data-v-819b85d9${_scopeId3}> Engage in dynamic, technology-enhanced learning sessions that make complex concepts easier to understand. Our interactive approach combines traditional teaching methods with modern digital tools for optimal learning outcomes. </p><img${ssrRenderAttr("src", _imports_2)} alt="Interactive Learning" class="feature-image mx-auto" data-v-819b85d9${_scopeId3}></div>`);
                  } else {
                    return [createVNode("div", {
                      class: "blur-effect h-100 text-center pa-4 rounded-xl"
                    }, [createVNode("h1", {
                      class: "text-3xl md:text-4xl font-bold mb-4"
                    }, " Interactive Learning Experience "), createVNode("p", {
                      class: "text-lg md:text-xl mb-6"
                    }, " Engage in dynamic, technology-enhanced learning sessions that make complex concepts easier to understand. Our interactive approach combines traditional teaching methods with modern digital tools for optimal learning outcomes. "), createVNode("img", {
                      src: _imports_2,
                      alt: "Interactive Learning",
                      class: "feature-image mx-auto"
                    })])];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4",
                class: "feature-item"
              }, {
                default: withCtx(() => [createVNode("div", {
                  class: "blur-effect h-100 text-center pa-4 rounded-xl"
                }, [createVNode("h1", {
                  class: "text-3xl md:text-4xl font-bold mb-4"
                }, " Personalised Learning Plans "), createVNode("p", {
                  class: "text-lg md:text-xl mb-6"
                }, " Our tutors create customised study plans tailored to your learning style and academic goals. We identify areas for improvement and develop strategies to enhance your understanding and performance in each subject. "), createVNode("img", {
                  src: _imports_0$1,
                  alt: "Personalized Learning",
                  class: "feature-image mx-auto"
                })])]),
                _: 1
              }), createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4",
                class: "feature-item"
              }, {
                default: withCtx(() => [createVNode("div", {
                  class: "blur-effect h-100 text-center pa-4 rounded-xl"
                }, [createVNode("h1", {
                  class: "text-3xl md:text-4xl font-bold mb-4"
                }, " Regular Progress Monitoring "), createVNode("p", {
                  class: "text-lg md:text-xl mb-6"
                }, " Track your academic journey with continuous assessment and feedback. Our tutors provide detailed progress reports and adjust teaching methods to ensure you're consistently improving and meeting your academic targets. "), createVNode("img", {
                  src: _imports_1,
                  alt: "Progress Monitoring",
                  class: "feature-image mx-auto"
                })])]),
                _: 1
              }), createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4",
                class: "feature-item"
              }, {
                default: withCtx(() => [createVNode("div", {
                  class: "blur-effect h-100 text-center pa-4 rounded-xl"
                }, [createVNode("h1", {
                  class: "text-3xl md:text-4xl font-bold mb-4"
                }, " Interactive Learning Experience "), createVNode("p", {
                  class: "text-lg md:text-xl mb-6"
                }, " Engage in dynamic, technology-enhanced learning sessions that make complex concepts easier to understand. Our interactive approach combines traditional teaching methods with modern digital tools for optimal learning outcomes. "), createVNode("img", {
                  src: _imports_2,
                  alt: "Interactive Learning",
                  class: "feature-image mx-auto"
                })])]),
                _: 1
              })];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [createVNode("div", {
          class: "text-center mb-12"
        }, [createVNode("h1", {
          class: "text-4xl md:text-5xl font-weight-bold mb-4"
        }, " Stay on track with our teaching methods "), createVNode("p", {
          class: "text-xl md:text-2xl mx-auto",
          style: {
            "max-width": "800px"
          }
        }, " Our comprehensive approach combines expert tutoring, continuous assessment, and personalised learning plans to ensure every student reaches their full potential in their chosen subjects. ")]), createVNode(VRow, {
          justify: "center"
        }, {
          default: withCtx(() => [createVNode(VCol, {
            cols: "12",
            sm: "6",
            md: "4",
            class: "feature-item"
          }, {
            default: withCtx(() => [createVNode("div", {
              class: "blur-effect h-100 text-center pa-4 rounded-xl"
            }, [createVNode("h1", {
              class: "text-3xl md:text-4xl font-bold mb-4"
            }, " Personalised Learning Plans "), createVNode("p", {
              class: "text-lg md:text-xl mb-6"
            }, " Our tutors create customised study plans tailored to your learning style and academic goals. We identify areas for improvement and develop strategies to enhance your understanding and performance in each subject. "), createVNode("img", {
              src: _imports_0$1,
              alt: "Personalized Learning",
              class: "feature-image mx-auto"
            })])]),
            _: 1
          }), createVNode(VCol, {
            cols: "12",
            sm: "6",
            md: "4",
            class: "feature-item"
          }, {
            default: withCtx(() => [createVNode("div", {
              class: "blur-effect h-100 text-center pa-4 rounded-xl"
            }, [createVNode("h1", {
              class: "text-3xl md:text-4xl font-bold mb-4"
            }, " Regular Progress Monitoring "), createVNode("p", {
              class: "text-lg md:text-xl mb-6"
            }, " Track your academic journey with continuous assessment and feedback. Our tutors provide detailed progress reports and adjust teaching methods to ensure you're consistently improving and meeting your academic targets. "), createVNode("img", {
              src: _imports_1,
              alt: "Progress Monitoring",
              class: "feature-image mx-auto"
            })])]),
            _: 1
          }), createVNode(VCol, {
            cols: "12",
            sm: "6",
            md: "4",
            class: "feature-item"
          }, {
            default: withCtx(() => [createVNode("div", {
              class: "blur-effect h-100 text-center pa-4 rounded-xl"
            }, [createVNode("h1", {
              class: "text-3xl md:text-4xl font-bold mb-4"
            }, " Interactive Learning Experience "), createVNode("p", {
              class: "text-lg md:text-xl mb-6"
            }, " Engage in dynamic, technology-enhanced learning sessions that make complex concepts easier to understand. Our interactive approach combines traditional teaching methods with modern digital tools for optimal learning outcomes. "), createVNode("img", {
              src: _imports_2,
              alt: "Interactive Learning",
              class: "feature-image mx-auto"
            })])]),
            _: 1
          })]),
          _: 1
        })];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SubjectItems.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SubjectItems = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-819b85d9"]]);
const _sfc_main = {
  __name: "subjects",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const isLoggedIn = computed(() => !!userStore.getUser);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BookTuition = __nuxt_component_0;
      const _component_CallToAction = __nuxt_component_0$1;
      const _component_FAQ = FAQ;
      const _component_GetInTouch = GetInTouch;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "full-width"
      }, _attrs))} data-v-7e2f88d0><section class="info-box" data-v-7e2f88d0>`);
      _push(ssrRenderComponent(VContainer, {
        class: "pa-0",
        fluid: "",
        "data-aos": "fade-up",
        "data-aos-duration": "300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="content-wrapper" data-v-7e2f88d0${_scopeId}>`);
            _push2(ssrRenderComponent(InfoBox, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [createVNode("div", {
              class: "content-wrapper"
            }, [createVNode(InfoBox)])];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="one-to-one" data-v-7e2f88d0>`);
      _push(ssrRenderComponent(VContainer, {
        class: "pa-0",
        fluid: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="content-wrapper" data-v-7e2f88d0${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BookTuition, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [createVNode("div", {
              class: "content-wrapper"
            }, [createVNode(_component_BookTuition)])];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="subject-items" data-v-7e2f88d0>`);
      _push(ssrRenderComponent(VContainer, {
        class: "pa-0",
        fluid: "",
        "data-aos": "fade-up",
        "data-aos-duration": "300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="content-wrapper" data-v-7e2f88d0${_scopeId}>`);
            _push2(ssrRenderComponent(SubjectItems, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [createVNode("div", {
              class: "content-wrapper"
            }, [createVNode(SubjectItems)])];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
      if (!unref(isLoggedIn)) {
        _push(`<section data-v-7e2f88d0>`);
        _push(ssrRenderComponent(VContainer, {
          class: "pa-0",
          fluid: "",
          "data-aos": "fade-up",
          "data-aos-duration": "300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="content-wrapper" data-v-7e2f88d0${_scopeId}>`);
              _push2(ssrRenderComponent(_component_CallToAction, {
                "start-color": "#dffcd2",
                "end-color": "#caffb1"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [createVNode("div", {
                class: "content-wrapper"
              }, [createVNode(_component_CallToAction, {
                "start-color": "#dffcd2",
                "end-color": "#caffb1"
              })])];
            }
          }),
          _: 1
        }, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="" data-v-7e2f88d0>`);
      _push(ssrRenderComponent(VContainer, {
        class: "box1 pa-0",
        fluid: "",
        "data-aos": "fade-up",
        "data-aos-duration": "300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FAQ, null, null, _parent2, _scopeId));
          } else {
            return [createVNode(_component_FAQ)];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="" data-v-7e2f88d0>`);
      _push(ssrRenderComponent(VContainer, {
        class: "box1 pa-0",
        fluid: "",
        "data-aos": "fade-up",
        "data-aos-duration": "300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_GetInTouch, null, null, _parent2, _scopeId));
          } else {
            return [createVNode(_component_GetInTouch)];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/subjects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const subjects = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7e2f88d0"]]);

export { subjects as default };
//# sourceMappingURL=subjects-CuciWVHe.mjs.map
