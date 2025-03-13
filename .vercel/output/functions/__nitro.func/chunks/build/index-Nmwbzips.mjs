import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, computed, ref, mergeProps, withCtx, createVNode, resolveComponent, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, V as VContainer, I as VDialog, e as VRow, f as VCol, t as VBtn, j as VCard, v as VCardTitle, k as VCardText, H as VImg } from './server.mjs';
import { F as FirebaseAuthentication } from './FirebaseAuthentication-BPhjs1Bd.mjs';
import { _ as __nuxt_component_0$1 } from './BookTuition-DnszmD09.mjs';
import { _ as __nuxt_component_0$2 } from './CallToAction-KwccuGOk.mjs';
import { F as FAQ } from './FAQ-C9-s_t0y.mjs';
import { G as GetInTouch } from './GetInTouch-CNVAZ0YB.mjs';
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
import 'vue-router';
import 'pinia-plugin-persistedstate';
import 'idb';
import 'tslib';
import 'undici';
import 'util';
import 'crypto';
import '@grpc/grpc-js';
import '@grpc/proto-loader';
import './firebaseErrorParser--QNGMjHC.mjs';
import './logo-Bfw0K8zp.mjs';

const _imports_0 = "" + buildAssetsURL("landing.BN-8hFY5.png");
const _imports_1 = "" + buildAssetsURL("Saly-7.DlKU3PiG.png");
const _imports_2 = "" + buildAssetsURL("Saly-17.n_Wx2zlY.png");
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_router_link = resolveComponent("router-link");
  _push(ssrRenderComponent(VContainer, mergeProps({
    fluid: "",
    class: "max-width-1600 py-24 px-4 px-lg-12"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VRow, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                md: "6",
                class: "d-flex flex-column justify-center"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="landing-hero text-black pa-6 rounded-xl" data-v-ff33b08c${_scopeId3}><h1 class="text-4xl md:text-5xl font-bold mb-4" data-v-ff33b08c${_scopeId3}> Get into your dream University </h1><p class="text-xl md:text-2xl mb-4" data-v-ff33b08c${_scopeId3}> A*/A guaranteed with our expert tutors. </p><div class="d-flex justify-center" data-v-ff33b08c${_scopeId3}>`);
                    _push4(ssrRenderComponent(VBtn, {
                      to: "/sign-up",
                      size: "x-large",
                      color: "#a3eeff",
                      variant: "elevated",
                      elevation: "0",
                      "prepend-icon": "mdi-checkbox-marked-circle",
                      class: "px-6 py-3 rounded-xl"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p class="text-lg md:text-xl" data-v-ff33b08c${_scopeId4}> Sign up for Free </p>`);
                        } else {
                          return [createVNode("p", {
                            class: "text-lg md:text-xl"
                          }, " Sign up for Free ")];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div></div>`);
                  } else {
                    return [createVNode("div", {
                      class: "landing-hero text-black pa-6 rounded-xl"
                    }, [createVNode("h1", {
                      class: "text-4xl md:text-5xl font-bold mb-4"
                    }, " Get into your dream University "), createVNode("p", {
                      class: "text-xl md:text-2xl mb-4"
                    }, " A*/A guaranteed with our expert tutors. "), createVNode("div", {
                      class: "d-flex justify-center"
                    }, [createVNode(VBtn, {
                      to: "/sign-up",
                      size: "x-large",
                      color: "#a3eeff",
                      variant: "elevated",
                      elevation: "0",
                      "prepend-icon": "mdi-checkbox-marked-circle",
                      class: "px-6 py-3 rounded-xl"
                    }, {
                      default: withCtx(() => [createVNode("p", {
                        class: "text-lg md:text-xl"
                      }, " Sign up for Free ")]),
                      _: 1
                    })])])];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_0)} alt="Landing Image" class="max-w-full h-auto object-contain" data-v-ff33b08c${_scopeId3}>`);
                  } else {
                    return [createVNode("img", {
                      src: _imports_0,
                      alt: "Landing Image",
                      class: "max-w-full h-auto object-contain"
                    })];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [createVNode(VCol, {
                cols: "12",
                md: "6",
                class: "d-flex flex-column justify-center"
              }, {
                default: withCtx(() => [createVNode("div", {
                  class: "landing-hero text-black pa-6 rounded-xl"
                }, [createVNode("h1", {
                  class: "text-4xl md:text-5xl font-bold mb-4"
                }, " Get into your dream University "), createVNode("p", {
                  class: "text-xl md:text-2xl mb-4"
                }, " A*/A guaranteed with our expert tutors. "), createVNode("div", {
                  class: "d-flex justify-center"
                }, [createVNode(VBtn, {
                  to: "/sign-up",
                  size: "x-large",
                  color: "#a3eeff",
                  variant: "elevated",
                  elevation: "0",
                  "prepend-icon": "mdi-checkbox-marked-circle",
                  class: "px-6 py-3 rounded-xl"
                }, {
                  default: withCtx(() => [createVNode("p", {
                    class: "text-lg md:text-xl"
                  }, " Sign up for Free ")]),
                  _: 1
                })])])]),
                _: 1
              }), createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [createVNode("img", {
                  src: _imports_0,
                  alt: "Landing Image",
                  class: "max-w-full h-auto object-contain"
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
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                sm: "6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCard, {
                      elevation: "0",
                      class: "landing-cards h-full rounded-xl text-center pa-6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCardTitle, {
                            class: "mb-4 justify-center"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<h1 class="text-3xl md:text-4xl font-bold" data-v-ff33b08c${_scopeId5}> For `);
                                _push6(ssrRenderComponent(_component_router_link, {
                                  to: "/tutoring",
                                  class: "underline text-inherit"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Parents `);
                                    } else {
                                      return [createTextVNode(" Parents ")];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(`</h1>`);
                              } else {
                                return [createVNode("h1", {
                                  class: "text-3xl md:text-4xl font-bold"
                                }, [createTextVNode(" For "), createVNode(_component_router_link, {
                                  to: "/tutoring",
                                  class: "underline text-inherit"
                                }, {
                                  default: withCtx(() => [createTextVNode(" Parents ")]),
                                  _: 1
                                })])];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<p class="text-xl md:text-2xl" data-v-ff33b08c${_scopeId5}> Safe and secure tutoring for your child. Our tutors are background-checked and experienced in teaching. </p><img${ssrRenderAttr("src", _imports_1)} alt="Landing Image" class="max-w-full max-h-full object-contain" data-v-ff33b08c${_scopeId5}>`);
                              } else {
                                return [createVNode("p", {
                                  class: "text-xl md:text-2xl"
                                }, " Safe and secure tutoring for your child. Our tutors are background-checked and experienced in teaching. "), createVNode("img", {
                                  src: _imports_1,
                                  alt: "Landing Image",
                                  class: "max-w-full max-h-full object-contain"
                                })];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [createVNode(VCardTitle, {
                            class: "mb-4 justify-center"
                          }, {
                            default: withCtx(() => [createVNode("h1", {
                              class: "text-3xl md:text-4xl font-bold"
                            }, [createTextVNode(" For "), createVNode(_component_router_link, {
                              to: "/tutoring",
                              class: "underline text-inherit"
                            }, {
                              default: withCtx(() => [createTextVNode(" Parents ")]),
                              _: 1
                            })])]),
                            _: 1
                          }), createVNode(VCardText, null, {
                            default: withCtx(() => [createVNode("p", {
                              class: "text-xl md:text-2xl"
                            }, " Safe and secure tutoring for your child. Our tutors are background-checked and experienced in teaching. "), createVNode("img", {
                              src: _imports_1,
                              alt: "Landing Image",
                              class: "max-w-full max-h-full object-contain"
                            })]),
                            _: 1
                          })];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [createVNode(VCard, {
                      elevation: "0",
                      class: "landing-cards h-full rounded-xl text-center pa-6"
                    }, {
                      default: withCtx(() => [createVNode(VCardTitle, {
                        class: "mb-4 justify-center"
                      }, {
                        default: withCtx(() => [createVNode("h1", {
                          class: "text-3xl md:text-4xl font-bold"
                        }, [createTextVNode(" For "), createVNode(_component_router_link, {
                          to: "/tutoring",
                          class: "underline text-inherit"
                        }, {
                          default: withCtx(() => [createTextVNode(" Parents ")]),
                          _: 1
                        })])]),
                        _: 1
                      }), createVNode(VCardText, null, {
                        default: withCtx(() => [createVNode("p", {
                          class: "text-xl md:text-2xl"
                        }, " Safe and secure tutoring for your child. Our tutors are background-checked and experienced in teaching. "), createVNode("img", {
                          src: _imports_1,
                          alt: "Landing Image",
                          class: "max-w-full max-h-full object-contain"
                        })]),
                        _: 1
                      })]),
                      _: 1
                    })];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                sm: "6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCard, {
                      elevation: "0",
                      class: "landing-cards h-full rounded-xl text-center pa-6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCardTitle, {
                            class: "mb-4 justify-center"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<h1 class="text-3xl md:text-4xl font-bold" data-v-ff33b08c${_scopeId5}> For `);
                                _push6(ssrRenderComponent(_component_router_link, {
                                  to: "/admissions",
                                  class: "underline text-inherit"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Students `);
                                    } else {
                                      return [createTextVNode(" Students ")];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(`</h1>`);
                              } else {
                                return [createVNode("h1", {
                                  class: "text-3xl md:text-4xl font-bold"
                                }, [createTextVNode(" For "), createVNode(_component_router_link, {
                                  to: "/admissions",
                                  class: "underline text-inherit"
                                }, {
                                  default: withCtx(() => [createTextVNode(" Students ")]),
                                  _: 1
                                })])];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<p class="text-xl md:text-2xl" data-v-ff33b08c${_scopeId5}> Effective admissions support to get into your dream University. 1-to-1 turtoring for many subjects. </p><img${ssrRenderAttr("src", _imports_2)} alt="Landing Image" class="max-w-full max-h-full object-contain" data-v-ff33b08c${_scopeId5}>`);
                              } else {
                                return [createVNode("p", {
                                  class: "text-xl md:text-2xl"
                                }, " Effective admissions support to get into your dream University. 1-to-1 turtoring for many subjects. "), createVNode("img", {
                                  src: _imports_2,
                                  alt: "Landing Image",
                                  class: "max-w-full max-h-full object-contain"
                                })];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [createVNode(VCardTitle, {
                            class: "mb-4 justify-center"
                          }, {
                            default: withCtx(() => [createVNode("h1", {
                              class: "text-3xl md:text-4xl font-bold"
                            }, [createTextVNode(" For "), createVNode(_component_router_link, {
                              to: "/admissions",
                              class: "underline text-inherit"
                            }, {
                              default: withCtx(() => [createTextVNode(" Students ")]),
                              _: 1
                            })])]),
                            _: 1
                          }), createVNode(VCardText, null, {
                            default: withCtx(() => [createVNode("p", {
                              class: "text-xl md:text-2xl"
                            }, " Effective admissions support to get into your dream University. 1-to-1 turtoring for many subjects. "), createVNode("img", {
                              src: _imports_2,
                              alt: "Landing Image",
                              class: "max-w-full max-h-full object-contain"
                            })]),
                            _: 1
                          })];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [createVNode(VCard, {
                      elevation: "0",
                      class: "landing-cards h-full rounded-xl text-center pa-6"
                    }, {
                      default: withCtx(() => [createVNode(VCardTitle, {
                        class: "mb-4 justify-center"
                      }, {
                        default: withCtx(() => [createVNode("h1", {
                          class: "text-3xl md:text-4xl font-bold"
                        }, [createTextVNode(" For "), createVNode(_component_router_link, {
                          to: "/admissions",
                          class: "underline text-inherit"
                        }, {
                          default: withCtx(() => [createTextVNode(" Students ")]),
                          _: 1
                        })])]),
                        _: 1
                      }), createVNode(VCardText, null, {
                        default: withCtx(() => [createVNode("p", {
                          class: "text-xl md:text-2xl"
                        }, " Effective admissions support to get into your dream University. 1-to-1 turtoring for many subjects. "), createVNode("img", {
                          src: _imports_2,
                          alt: "Landing Image",
                          class: "max-w-full max-h-full object-contain"
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
                sm: "6"
              }, {
                default: withCtx(() => [createVNode(VCard, {
                  elevation: "0",
                  class: "landing-cards h-full rounded-xl text-center pa-6"
                }, {
                  default: withCtx(() => [createVNode(VCardTitle, {
                    class: "mb-4 justify-center"
                  }, {
                    default: withCtx(() => [createVNode("h1", {
                      class: "text-3xl md:text-4xl font-bold"
                    }, [createTextVNode(" For "), createVNode(_component_router_link, {
                      to: "/tutoring",
                      class: "underline text-inherit"
                    }, {
                      default: withCtx(() => [createTextVNode(" Parents ")]),
                      _: 1
                    })])]),
                    _: 1
                  }), createVNode(VCardText, null, {
                    default: withCtx(() => [createVNode("p", {
                      class: "text-xl md:text-2xl"
                    }, " Safe and secure tutoring for your child. Our tutors are background-checked and experienced in teaching. "), createVNode("img", {
                      src: _imports_1,
                      alt: "Landing Image",
                      class: "max-w-full max-h-full object-contain"
                    })]),
                    _: 1
                  })]),
                  _: 1
                })]),
                _: 1
              }), createVNode(VCol, {
                cols: "12",
                sm: "6"
              }, {
                default: withCtx(() => [createVNode(VCard, {
                  elevation: "0",
                  class: "landing-cards h-full rounded-xl text-center pa-6"
                }, {
                  default: withCtx(() => [createVNode(VCardTitle, {
                    class: "mb-4 justify-center"
                  }, {
                    default: withCtx(() => [createVNode("h1", {
                      class: "text-3xl md:text-4xl font-bold"
                    }, [createTextVNode(" For "), createVNode(_component_router_link, {
                      to: "/admissions",
                      class: "underline text-inherit"
                    }, {
                      default: withCtx(() => [createTextVNode(" Students ")]),
                      _: 1
                    })])]),
                    _: 1
                  }), createVNode(VCardText, null, {
                    default: withCtx(() => [createVNode("p", {
                      class: "text-xl md:text-2xl"
                    }, " Effective admissions support to get into your dream University. 1-to-1 turtoring for many subjects. "), createVNode("img", {
                      src: _imports_2,
                      alt: "Landing Image",
                      class: "max-w-full max-h-full object-contain"
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
      } else {
        return [createVNode(VRow, null, {
          default: withCtx(() => [createVNode(VCol, {
            cols: "12",
            md: "6",
            class: "d-flex flex-column justify-center"
          }, {
            default: withCtx(() => [createVNode("div", {
              class: "landing-hero text-black pa-6 rounded-xl"
            }, [createVNode("h1", {
              class: "text-4xl md:text-5xl font-bold mb-4"
            }, " Get into your dream University "), createVNode("p", {
              class: "text-xl md:text-2xl mb-4"
            }, " A*/A guaranteed with our expert tutors. "), createVNode("div", {
              class: "d-flex justify-center"
            }, [createVNode(VBtn, {
              to: "/sign-up",
              size: "x-large",
              color: "#a3eeff",
              variant: "elevated",
              elevation: "0",
              "prepend-icon": "mdi-checkbox-marked-circle",
              class: "px-6 py-3 rounded-xl"
            }, {
              default: withCtx(() => [createVNode("p", {
                class: "text-lg md:text-xl"
              }, " Sign up for Free ")]),
              _: 1
            })])])]),
            _: 1
          }), createVNode(VCol, {
            cols: "12",
            md: "6"
          }, {
            default: withCtx(() => [createVNode("img", {
              src: _imports_0,
              alt: "Landing Image",
              class: "max-w-full h-auto object-contain"
            })]),
            _: 1
          })]),
          _: 1
        }), createVNode(VRow, null, {
          default: withCtx(() => [createVNode(VCol, {
            cols: "12",
            sm: "6"
          }, {
            default: withCtx(() => [createVNode(VCard, {
              elevation: "0",
              class: "landing-cards h-full rounded-xl text-center pa-6"
            }, {
              default: withCtx(() => [createVNode(VCardTitle, {
                class: "mb-4 justify-center"
              }, {
                default: withCtx(() => [createVNode("h1", {
                  class: "text-3xl md:text-4xl font-bold"
                }, [createTextVNode(" For "), createVNode(_component_router_link, {
                  to: "/tutoring",
                  class: "underline text-inherit"
                }, {
                  default: withCtx(() => [createTextVNode(" Parents ")]),
                  _: 1
                })])]),
                _: 1
              }), createVNode(VCardText, null, {
                default: withCtx(() => [createVNode("p", {
                  class: "text-xl md:text-2xl"
                }, " Safe and secure tutoring for your child. Our tutors are background-checked and experienced in teaching. "), createVNode("img", {
                  src: _imports_1,
                  alt: "Landing Image",
                  class: "max-w-full max-h-full object-contain"
                })]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), createVNode(VCol, {
            cols: "12",
            sm: "6"
          }, {
            default: withCtx(() => [createVNode(VCard, {
              elevation: "0",
              class: "landing-cards h-full rounded-xl text-center pa-6"
            }, {
              default: withCtx(() => [createVNode(VCardTitle, {
                class: "mb-4 justify-center"
              }, {
                default: withCtx(() => [createVNode("h1", {
                  class: "text-3xl md:text-4xl font-bold"
                }, [createTextVNode(" For "), createVNode(_component_router_link, {
                  to: "/admissions",
                  class: "underline text-inherit"
                }, {
                  default: withCtx(() => [createTextVNode(" Students ")]),
                  _: 1
                })])]),
                _: 1
              }), createVNode(VCardText, null, {
                default: withCtx(() => [createVNode("p", {
                  class: "text-xl md:text-2xl"
                }, " Effective admissions support to get into your dream University. 1-to-1 turtoring for many subjects. "), createVNode("img", {
                  src: _imports_2,
                  alt: "Landing Image",
                  class: "max-w-full max-h-full object-contain"
                })]),
                _: 1
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
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LandingSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-ff33b08c"]]);
const cashIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='7'%20y='9'%20width='14'%20height='10'%20rx='2'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3ccircle%20cx='14'%20cy='14'%20r='2'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17%209V7C17%205.89543%2016.1046%205%2015%205H5C3.89543%205%203%205.89543%203%207V13C3%2014.1046%203.89543%2015%205%2015H7'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const chartLineIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%2019H20'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M4%2015L8%209L12%2011L16%206L20%2010'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const checkboxIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%2011L12%2014L20%206'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M20%2012V18C20%2019.1046%2019.1046%2020%2018%2020H6C4.89543%2020%204%2019.1046%204%2018V6C4%204.89543%204.89543%204%206%204H15'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const moodHappyIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='12'%20cy='12'%20r='9'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9%209H9.01'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15%209H15.01'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9%2013C9%2012.4477%208.55228%2012%208%2012C7.44772%2012%207%2012.4477%207%2013H9ZM17%2013C17%2012.4477%2016.5523%2012%2016%2012C15.4477%2012%2015%2012.4477%2015%2013H17ZM16%2014C16.5523%2014%2017%2013.5523%2017%2013C17%2012.4477%2016.5523%2012%2016%2012V14ZM8%2012C7.44772%2012%207%2012.4477%207%2013C7%2013.5523%207.44772%2014%208%2014V12ZM7%2013C7%2015.7614%209.23858%2018%2012%2018V16C10.3431%2016%209%2014.6569%209%2013H7ZM12%2018C14.7614%2018%2017%2015.7614%2017%2013H15C15%2014.6569%2013.6569%2016%2012%2016V18ZM16%2012H8V14H16V12Z'%20fill='black'/%3e%3c/svg%3e";
const rocketIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%2013C7.67019%2013.4362%2010.5638%2016.3298%2011%2020C12.7971%2018.964%2013.9315%2017.0732%2014%2015C17.4338%2013.7921%2019.8018%2010.6346%2020%207C20%205.34315%2018.6569%204%2017%204C13.3654%204.19818%2010.2079%206.56623%209%2010C6.9268%2010.0685%205.03603%2011.2029%204%2013'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M6.99968%2014C4.87063%2015.202%203.68383%2017.5756%203.99968%2020C6.42411%2020.3159%208.79771%2019.1291%209.99968%2017'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3ccircle%20cx='15'%20cy='9'%20r='1'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const vocabularyIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10%2019H4C3.44772%2019%203%2018.5523%203%2018V4C3%203.44772%203.44772%203%204%203H10C11.1046%203%2012%203.89543%2012%205C12%203.89543%2012.8954%203%2014%203H20C20.5523%203%2021%203.44772%2021%204V18C21%2018.5523%2020.5523%2019%2020%2019H14C12.8954%2019%2012%2019.8954%2012%2021C12%2019.8954%2011.1046%2019%2010%2019Z'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%205V21'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M7%207H8'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M7%2011H8'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16%207H17'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16%2011H17'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16%2015H17'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const _sfc_main$1 = {
  data() {
    return {
      features: [{
        icon: moodHappyIcon,
        title: "Friendly",
        description: "Id laborum laboris duis nostrud excepteur ut velit nulla magna Lorem proident non."
      }, {
        icon: checkboxIcon,
        title: "Reliable",
        description: "Magna Lorem ex cillum fugiat ad enim aute irure sit duis minim."
      }, {
        icon: vocabularyIcon,
        title: "Experienced",
        description: "Proident nostrud excepteur sint ut culpa consectetur aute adipisicing non anim ullamco."
      }, {
        icon: rocketIcon,
        title: "Fast",
        description: "Qui reprehenderit nostrud dolore nisi ad fugiat labore eiusmod sint aliquip nisi voluptate."
      }, {
        icon: cashIcon,
        title: "Affordable",
        description: "Reprehenderit fugiat elit in do ipsum ut pariatur."
      }, {
        icon: chartLineIcon,
        title: "Scalable",
        description: "Lorem deserunt et eiusmod. Ea in consectetur minim officia ullamco enim deserunt est."
      }]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent(VContainer, mergeProps({
    fluid: "",
    class: "features max-width-1600 px-4 px-lg-12 py-16"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VRow, {
          justify: "center"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                class: "text-center"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h1 class="text-4xl md:text-5xl font-bold mb-4" data-v-0ca03cfb${_scopeId3}> Why choose our service? </h1><p class="text-xl md:text-2xl max-w-2xl mx-auto mb-12" data-v-0ca03cfb${_scopeId3}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>`);
                  } else {
                    return [createVNode("h1", {
                      class: "text-4xl md:text-5xl font-bold mb-4"
                    }, " Why choose our service? "), createVNode("p", {
                      class: "text-xl md:text-2xl max-w-2xl mx-auto mb-12"
                    }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [createVNode(VCol, {
                cols: "12",
                class: "text-center"
              }, {
                default: withCtx(() => [createVNode("h1", {
                  class: "text-4xl md:text-5xl font-bold mb-4"
                }, " Why choose our service? "), createVNode("p", {
                  class: "text-xl md:text-2xl max-w-2xl mx-auto mb-12"
                }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")]),
                _: 1
              })];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VRow, {
          class: "justify-center"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList($data.features, (feature) => {
                _push3(ssrRenderComponent(VCol, {
                  key: feature.title,
                  cols: "12",
                  sm: "6",
                  md: "4",
                  class: "px-4"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(VCard, {
                        class: "feature-card h-100 rounded-xl"
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(VCardText, {
                              class: "pa-4"
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`<div class="feature-icon-wrapper mb-4" data-v-0ca03cfb${_scopeId5}>`);
                                  _push6(ssrRenderComponent(VImg, {
                                    src: feature.icon,
                                    class: "feature-icon",
                                    width: "40",
                                    height: "40",
                                    contain: ""
                                  }, null, _parent6, _scopeId5));
                                  _push6(`</div><h1 class="text-2xl md:text-3xl font-bold mb-3" data-v-0ca03cfb${_scopeId5}>${ssrInterpolate(feature.title)}</h1><p class="text-base md:text-lg" data-v-0ca03cfb${_scopeId5}>${ssrInterpolate(feature.description)}</p>`);
                                } else {
                                  return [createVNode("div", {
                                    class: "feature-icon-wrapper mb-4"
                                  }, [createVNode(VImg, {
                                    src: feature.icon,
                                    class: "feature-icon",
                                    width: "40",
                                    height: "40",
                                    contain: ""
                                  }, null, 8, ["src"])]), createVNode("h1", {
                                    class: "text-2xl md:text-3xl font-bold mb-3"
                                  }, toDisplayString(feature.title), 1), createVNode("p", {
                                    class: "text-base md:text-lg"
                                  }, toDisplayString(feature.description), 1)];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          } else {
                            return [createVNode(VCardText, {
                              class: "pa-4"
                            }, {
                              default: withCtx(() => [createVNode("div", {
                                class: "feature-icon-wrapper mb-4"
                              }, [createVNode(VImg, {
                                src: feature.icon,
                                class: "feature-icon",
                                width: "40",
                                height: "40",
                                contain: ""
                              }, null, 8, ["src"])]), createVNode("h1", {
                                class: "text-2xl md:text-3xl font-bold mb-3"
                              }, toDisplayString(feature.title), 1), createVNode("p", {
                                class: "text-base md:text-lg"
                              }, toDisplayString(feature.description), 1)]),
                              _: 2
                            }, 1024)];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    } else {
                      return [createVNode(VCard, {
                        class: "feature-card h-100 rounded-xl"
                      }, {
                        default: withCtx(() => [createVNode(VCardText, {
                          class: "pa-4"
                        }, {
                          default: withCtx(() => [createVNode("div", {
                            class: "feature-icon-wrapper mb-4"
                          }, [createVNode(VImg, {
                            src: feature.icon,
                            class: "feature-icon",
                            width: "40",
                            height: "40",
                            contain: ""
                          }, null, 8, ["src"])]), createVNode("h1", {
                            class: "text-2xl md:text-3xl font-bold mb-3"
                          }, toDisplayString(feature.title), 1), createVNode("p", {
                            class: "text-base md:text-lg"
                          }, toDisplayString(feature.description), 1)]),
                          _: 2
                        }, 1024)]),
                        _: 2
                      }, 1024)];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [(openBlock(true), createBlock(Fragment, null, renderList($data.features, (feature) => {
                return openBlock(), createBlock(VCol, {
                  key: feature.title,
                  cols: "12",
                  sm: "6",
                  md: "4",
                  class: "px-4"
                }, {
                  default: withCtx(() => [createVNode(VCard, {
                    class: "feature-card h-100 rounded-xl"
                  }, {
                    default: withCtx(() => [createVNode(VCardText, {
                      class: "pa-4"
                    }, {
                      default: withCtx(() => [createVNode("div", {
                        class: "feature-icon-wrapper mb-4"
                      }, [createVNode(VImg, {
                        src: feature.icon,
                        class: "feature-icon",
                        width: "40",
                        height: "40",
                        contain: ""
                      }, null, 8, ["src"])]), createVNode("h1", {
                        class: "text-2xl md:text-3xl font-bold mb-3"
                      }, toDisplayString(feature.title), 1), createVNode("p", {
                        class: "text-base md:text-lg"
                      }, toDisplayString(feature.description), 1)]),
                      _: 2
                    }, 1024)]),
                    _: 2
                  }, 1024)]),
                  _: 2
                }, 1024);
              }), 128))];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [createVNode(VRow, {
          justify: "center"
        }, {
          default: withCtx(() => [createVNode(VCol, {
            cols: "12",
            class: "text-center"
          }, {
            default: withCtx(() => [createVNode("h1", {
              class: "text-4xl md:text-5xl font-bold mb-4"
            }, " Why choose our service? "), createVNode("p", {
              class: "text-xl md:text-2xl max-w-2xl mx-auto mb-12"
            }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")]),
            _: 1
          })]),
          _: 1
        }), createVNode(VRow, {
          class: "justify-center"
        }, {
          default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList($data.features, (feature) => {
            return openBlock(), createBlock(VCol, {
              key: feature.title,
              cols: "12",
              sm: "6",
              md: "4",
              class: "px-4"
            }, {
              default: withCtx(() => [createVNode(VCard, {
                class: "feature-card h-100 rounded-xl"
              }, {
                default: withCtx(() => [createVNode(VCardText, {
                  class: "pa-4"
                }, {
                  default: withCtx(() => [createVNode("div", {
                    class: "feature-icon-wrapper mb-4"
                  }, [createVNode(VImg, {
                    src: feature.icon,
                    class: "feature-icon",
                    width: "40",
                    height: "40",
                    contain: ""
                  }, null, 8, ["src"])]), createVNode("h1", {
                    class: "text-2xl md:text-3xl font-bold mb-3"
                  }, toDisplayString(feature.title), 1), createVNode("p", {
                    class: "text-base md:text-lg"
                  }, toDisplayString(feature.description), 1)]),
                  _: 2
                }, 1024)]),
                _: 2
              }, 1024)]),
              _: 2
            }, 1024);
          }), 128))]),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WhyChooseUs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-0ca03cfb"]]);
const _sfc_main = {
  setup() {
    const userStore = useUserStore();
    const isLoggedIn = computed(() => !!userStore.getUser);
    const authDialogVisible = ref(false);
    const backgroundImage = ref("");
    const updateBackgroundImage = () => {
      const width = (void 0).innerWidth;
      if (width < 640) {
        backgroundImage.value = "/assets/main_images/landing-small.png";
      } else if (width < 1280) {
        backgroundImage.value = "/assets/main_images/landing-medium.png";
      } else {
        backgroundImage.value = "/assets/main_images/landing-large.png";
      }
    };
    const showAuthDialog = () => {
      authDialogVisible.value = true;
    };
    const closeAuthDialog = () => {
      authDialogVisible.value = false;
    };
    return {
      isLoggedIn,
      authDialogVisible,
      showAuthDialog,
      closeAuthDialog,
      backgroundImage,
      updateBackgroundImage
    };
  },
  data() {
    return {
      platform: "web",
      facts: [{
        value: "50%",
        description: "Higher change of getting an offer when using Topgrad"
      }, {
        value: "200+",
        description: "Student opportunities added every month"
      }, {
        value: "98%",
        description: "Students satisfied with the Topgrad experience"
      }]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_LandingSection = __nuxt_component_0;
  const _component_FirebaseAuthentication = FirebaseAuthentication;
  const _component_BookTuition = __nuxt_component_0$1;
  const _component_WhyChooseUs = __nuxt_component_3;
  const _component_CallToAction = __nuxt_component_0$2;
  const _component_FAQ = FAQ;
  const _component_GetInTouch = GetInTouch;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "full-width"
  }, _attrs))} data-v-e4dfaf2e><section class="landing" data-v-e4dfaf2e>`);
  _push(ssrRenderComponent(VContainer, {
    class: "pa-0",
    fluid: "",
    "data-aos": "fade-up",
    "data-aos-duration": "300"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="content-wrapper" data-v-e4dfaf2e${_scopeId}>`);
        _push2(ssrRenderComponent(_component_LandingSection, null, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [createVNode("div", {
          class: "content-wrapper"
        }, [createVNode(_component_LandingSection)])];
      }
    }),
    _: 1
  }, _parent));
  _push(`</section>`);
  _push(ssrRenderComponent(VDialog, {
    modelValue: $setup.authDialogVisible,
    "onUpdate:modelValue": ($event) => $setup.authDialogVisible = $event,
    "max-width": "600px",
    "onClick:outside": $setup.closeAuthDialog
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_FirebaseAuthentication, {
          onClose: $setup.closeAuthDialog,
          onClick: ($event) => $setup.showAuthDialog("signup")
        }, null, _parent2, _scopeId));
      } else {
        return [createVNode(_component_FirebaseAuthentication, {
          onClose: $setup.closeAuthDialog,
          onClick: ($event) => $setup.showAuthDialog("signup")
        }, null, 8, ["onClose", "onClick"])];
      }
    }),
    _: 1
  }, _parent));
  _push(`<section class="one-to-one" data-v-e4dfaf2e>`);
  _push(ssrRenderComponent(VContainer, {
    class: "pa-0",
    fluid: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="content-wrapper" data-v-e4dfaf2e${_scopeId}>`);
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
  _push(`</section><section class="why-choose-us" data-v-e4dfaf2e>`);
  _push(ssrRenderComponent(VContainer, {
    class: "box1 pa-0",
    fluid: "",
    "data-aos": "fade-up",
    "data-aos-duration": "300"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_WhyChooseUs, null, null, _parent2, _scopeId));
      } else {
        return [createVNode(_component_WhyChooseUs)];
      }
    }),
    _: 1
  }, _parent));
  _push(`</section>`);
  if (!$setup.isLoggedIn) {
    _push(`<section data-v-e4dfaf2e>`);
    _push(ssrRenderComponent(VContainer, {
      class: "pa-0",
      fluid: "",
      "data-aos": "fade-up",
      "data-aos-duration": "300"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="content-wrapper" data-v-e4dfaf2e${_scopeId}>`);
          _push2(ssrRenderComponent(_component_CallToAction, null, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          return [createVNode("div", {
            class: "content-wrapper"
          }, [createVNode(_component_CallToAction)])];
        }
      }),
      _: 1
    }, _parent));
    _push(`</section>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<section class="" data-v-e4dfaf2e>`);
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
  _push(`</section><section class="" data-v-e4dfaf2e>`);
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
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e4dfaf2e"]]);

export { index as default };
//# sourceMappingURL=index-Nmwbzips.mjs.map
