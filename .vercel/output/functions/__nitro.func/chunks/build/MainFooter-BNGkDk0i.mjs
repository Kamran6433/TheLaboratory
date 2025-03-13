import { _ as __nuxt_component_0$1 } from './nuxt-link-DRGY1ko4.mjs';
import { useSSRContext, ref, computed, withCtx, createVNode, toDisplayString, mergeProps, openBlock, createBlock, Fragment, renderList, withModifiers, createTextVNode, createCommentVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-Bfw0K8zp.mjs';
import { _ as _export_sfc, b as useNuxtApp, s as storeToRefs, u as useRouter$1, ag as VAppBar, V as VContainer, e as VRow, f as VCol, $ as VSpacer, ah as VToolbarItems, R as VChip, ai as VMenu, l as VList, m as VListItem, p as VListItemTitle, aj as VAppBarNavIcon, I as VDialog, j as VCard, t as VBtn, o as VIcon, ak as VFooter, x as VDivider } from './server.mjs';
import { u as useUserStore } from './user-WKIwKJhJ.mjs';
import { F as FirebaseAuthentication } from './FirebaseAuthentication-BPhjs1Bd.mjs';

const _sfc_main$1 = {
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp();
    const userStore = useUserStore();
    const {
      getUser
    } = storeToRefs(userStore);
    const router = useRouter$1();
    const authDialogVisible = ref(false);
    const drawer = ref(false);
    const profileMenu = ref(false);
    const visibleMenuItems = ref(6);
    const isScrolled = ref(false);
    const userLoggedIn = computed(() => !!getUser.value);
    const menuItems = [
      {
        title: "Admissions Support",
        link: "/admissions"
      },
      {
        title: "Subjects",
        link: "/subjects"
      },
      {
        title: "Tutoring",
        link: "/tutoring"
      },
      {
        title: "Past Papers",
        link: "/past-papers-selector"
      },
      // { title: 'Blogs', link: '/blogs' },
      {
        title: "Company",
        link: "/company"
      }
    ];
    const authDialogMode = ref("signup");
    const redirect = (path) => {
      router.push(path);
    };
    const closeAuthDialog = () => {
      authDialogVisible.value = false;
    };
    const logout = async () => {
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<!--[--><header class="navbar-wrapper" data-v-45b070e2>`);
      _push(ssrRenderComponent(VAppBar, {
        id: "navbar",
        app: "",
        fixed: "",
        elevation: "0",
        height: "90",
        class: ["blur-effect", {
          "scrolled": isScrolled.value
        }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-width-1600 w-100" data-v-45b070e2${_scopeId}>`);
            _push2(ssrRenderComponent(VContainer, {
              class: "width-100 max-width-1600 px-4",
              fluid: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, {
                    class: "box5",
                    "no-gutters": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "auto"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_nuxt_link, {
                                to: "/",
                                class: "logo"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<img${ssrRenderAttr("src", _imports_0)} alt="Logo" class="box2 logo-image" data-v-45b070e2${_scopeId5}>`);
                                  } else {
                                    return [createVNode("img", {
                                      src: _imports_0,
                                      alt: "Logo",
                                      class: "box2 logo-image"
                                    })];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [createVNode(_component_nuxt_link, {
                                to: "/",
                                class: "logo"
                              }, {
                                default: withCtx(() => [createVNode("img", {
                                  src: _imports_0,
                                  alt: "Logo",
                                  class: "box2 logo-image"
                                })]),
                                _: 1
                              })];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "auto",
                          class: "box2 d-flex justify-end"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="box2 toolbar flex" data-v-45b070e2${_scopeId4}>`);
                              _push5(ssrRenderComponent(VToolbarItems, {
                                class: "box4 ml-auto flex justify-between items-center hidden-sm-and-down"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(menuItems.slice(0, visibleMenuItems.value), (item) => {
                                      _push6(ssrRenderComponent(VChip, {
                                        key: item.title,
                                        size: "large",
                                        color: "black",
                                        variant: "text",
                                        to: item.link,
                                        class: "m-4"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<p class="text-lg" data-v-45b070e2${_scopeId6}>${ssrInterpolate(item.title)}</p>`);
                                          } else {
                                            return [createVNode("p", {
                                              class: "text-lg"
                                            }, toDisplayString(item.title), 1)];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                    if (!userLoggedIn.value) {
                                      _push6(ssrRenderComponent(VChip, {
                                        size: "large",
                                        color: "black",
                                        variant: "outlined",
                                        class: "m-4",
                                        onClick: ($event) => redirect("login")
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<p class="text-lg" data-v-45b070e2${_scopeId6}> Login </p>`);
                                          } else {
                                            return [createVNode("p", {
                                              class: "text-lg"
                                            }, " Login ")];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      _push6(ssrRenderComponent(VMenu, {
                                        modelValue: profileMenu.value,
                                        "onUpdate:modelValue": ($event) => profileMenu.value = $event,
                                        offset: [40, 35],
                                        transition: "slide-y-transition"
                                      }, {
                                        activator: withCtx(({
                                          props
                                        }, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VChip, mergeProps(props, {
                                              size: "large",
                                              color: "black",
                                              variant: "outlined",
                                              class: "m-4"
                                            }), {
                                              default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<p class="text-lg" data-v-45b070e2${_scopeId7}> Profile </p>`);
                                                } else {
                                                  return [createVNode("p", {
                                                    class: "text-lg"
                                                  }, " Profile ")];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [createVNode(VChip, mergeProps(props, {
                                              size: "large",
                                              color: "black",
                                              variant: "outlined",
                                              class: "m-4"
                                            }), {
                                              default: withCtx(() => [createVNode("p", {
                                                class: "text-lg"
                                              }, " Profile ")]),
                                              _: 2
                                            }, 1040)];
                                          }
                                        }),
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VList, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VListItem, null, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VListItemTitle, {
                                                          class: "d-flex justify-center"
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(ssrRenderComponent(VChip, {
                                                                to: "/profile/user",
                                                                size: "large",
                                                                color: "black",
                                                                variant: "outlined",
                                                                class: "mb-2",
                                                                onClick: ($event) => profileMenu.value = false
                                                              }, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(`<p class="text-lg" data-v-45b070e2${_scopeId10}> View Profile </p>`);
                                                                  } else {
                                                                    return [createVNode("p", {
                                                                      class: "text-lg"
                                                                    }, " View Profile ")];
                                                                  }
                                                                }),
                                                                _: 1
                                                              }, _parent10, _scopeId9));
                                                            } else {
                                                              return [createVNode(VChip, {
                                                                to: "/profile/user",
                                                                size: "large",
                                                                color: "black",
                                                                variant: "outlined",
                                                                class: "mb-2",
                                                                onClick: ($event) => profileMenu.value = false
                                                              }, {
                                                                default: withCtx(() => [createVNode("p", {
                                                                  class: "text-lg"
                                                                }, " View Profile ")]),
                                                                _: 1
                                                              }, 8, ["onClick"])];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [createVNode(VListItemTitle, {
                                                          class: "d-flex justify-center"
                                                        }, {
                                                          default: withCtx(() => [createVNode(VChip, {
                                                            to: "/profile/user",
                                                            size: "large",
                                                            color: "black",
                                                            variant: "outlined",
                                                            class: "mb-2",
                                                            onClick: ($event) => profileMenu.value = false
                                                          }, {
                                                            default: withCtx(() => [createVNode("p", {
                                                              class: "text-lg"
                                                            }, " View Profile ")]),
                                                            _: 1
                                                          }, 8, ["onClick"])]),
                                                          _: 1
                                                        })];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(VListItem, null, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VListItemTitle, {
                                                          class: "d-flex justify-center"
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(ssrRenderComponent(VChip, {
                                                                size: "large",
                                                                color: "black",
                                                                variant: "outlined",
                                                                onClick: logout
                                                              }, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(`<p class="text-lg" data-v-45b070e2${_scopeId10}> Logout </p>`);
                                                                  } else {
                                                                    return [createVNode("p", {
                                                                      class: "text-lg"
                                                                    }, " Logout ")];
                                                                  }
                                                                }),
                                                                _: 1
                                                              }, _parent10, _scopeId9));
                                                            } else {
                                                              return [createVNode(VChip, {
                                                                size: "large",
                                                                color: "black",
                                                                variant: "outlined",
                                                                onClick: logout
                                                              }, {
                                                                default: withCtx(() => [createVNode("p", {
                                                                  class: "text-lg"
                                                                }, " Logout ")]),
                                                                _: 1
                                                              })];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [createVNode(VListItemTitle, {
                                                          class: "d-flex justify-center"
                                                        }, {
                                                          default: withCtx(() => [createVNode(VChip, {
                                                            size: "large",
                                                            color: "black",
                                                            variant: "outlined",
                                                            onClick: logout
                                                          }, {
                                                            default: withCtx(() => [createVNode("p", {
                                                              class: "text-lg"
                                                            }, " Logout ")]),
                                                            _: 1
                                                          })]),
                                                          _: 1
                                                        })];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [createVNode(VListItem, null, {
                                                    default: withCtx(() => [createVNode(VListItemTitle, {
                                                      class: "d-flex justify-center"
                                                    }, {
                                                      default: withCtx(() => [createVNode(VChip, {
                                                        to: "/profile/user",
                                                        size: "large",
                                                        color: "black",
                                                        variant: "outlined",
                                                        class: "mb-2",
                                                        onClick: ($event) => profileMenu.value = false
                                                      }, {
                                                        default: withCtx(() => [createVNode("p", {
                                                          class: "text-lg"
                                                        }, " View Profile ")]),
                                                        _: 1
                                                      }, 8, ["onClick"])]),
                                                      _: 1
                                                    })]),
                                                    _: 1
                                                  }), createVNode(VListItem, null, {
                                                    default: withCtx(() => [createVNode(VListItemTitle, {
                                                      class: "d-flex justify-center"
                                                    }, {
                                                      default: withCtx(() => [createVNode(VChip, {
                                                        size: "large",
                                                        color: "black",
                                                        variant: "outlined",
                                                        onClick: logout
                                                      }, {
                                                        default: withCtx(() => [createVNode("p", {
                                                          class: "text-lg"
                                                        }, " Logout ")]),
                                                        _: 1
                                                      })]),
                                                      _: 1
                                                    })]),
                                                    _: 1
                                                  })];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [createVNode(VList, null, {
                                              default: withCtx(() => [createVNode(VListItem, null, {
                                                default: withCtx(() => [createVNode(VListItemTitle, {
                                                  class: "d-flex justify-center"
                                                }, {
                                                  default: withCtx(() => [createVNode(VChip, {
                                                    to: "/profile/user",
                                                    size: "large",
                                                    color: "black",
                                                    variant: "outlined",
                                                    class: "mb-2",
                                                    onClick: ($event) => profileMenu.value = false
                                                  }, {
                                                    default: withCtx(() => [createVNode("p", {
                                                      class: "text-lg"
                                                    }, " View Profile ")]),
                                                    _: 1
                                                  }, 8, ["onClick"])]),
                                                  _: 1
                                                })]),
                                                _: 1
                                              }), createVNode(VListItem, null, {
                                                default: withCtx(() => [createVNode(VListItemTitle, {
                                                  class: "d-flex justify-center"
                                                }, {
                                                  default: withCtx(() => [createVNode(VChip, {
                                                    size: "large",
                                                    color: "black",
                                                    variant: "outlined",
                                                    onClick: logout
                                                  }, {
                                                    default: withCtx(() => [createVNode("p", {
                                                      class: "text-lg"
                                                    }, " Logout ")]),
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
                                      }, _parent6, _scopeId5));
                                    }
                                  } else {
                                    return [(openBlock(true), createBlock(Fragment, null, renderList(menuItems.slice(0, visibleMenuItems.value), (item) => {
                                      return openBlock(), createBlock(VChip, {
                                        key: item.title,
                                        size: "large",
                                        color: "black",
                                        variant: "text",
                                        to: item.link,
                                        class: "m-4"
                                      }, {
                                        default: withCtx(() => [createVNode("p", {
                                          class: "text-lg"
                                        }, toDisplayString(item.title), 1)]),
                                        _: 2
                                      }, 1032, ["to"]);
                                    }), 128)), !userLoggedIn.value ? (openBlock(), createBlock(VChip, {
                                      key: 0,
                                      size: "large",
                                      color: "black",
                                      variant: "outlined",
                                      class: "m-4",
                                      onClick: ($event) => redirect("login")
                                    }, {
                                      default: withCtx(() => [createVNode("p", {
                                        class: "text-lg"
                                      }, " Login ")]),
                                      _: 1
                                    }, 8, ["onClick"])) : (openBlock(), createBlock(VMenu, {
                                      key: 1,
                                      modelValue: profileMenu.value,
                                      "onUpdate:modelValue": ($event) => profileMenu.value = $event,
                                      offset: [40, 35],
                                      transition: "slide-y-transition"
                                    }, {
                                      activator: withCtx(({
                                        props
                                      }) => [createVNode(VChip, mergeProps(props, {
                                        size: "large",
                                        color: "black",
                                        variant: "outlined",
                                        class: "m-4"
                                      }), {
                                        default: withCtx(() => [createVNode("p", {
                                          class: "text-lg"
                                        }, " Profile ")]),
                                        _: 2
                                      }, 1040)]),
                                      default: withCtx(() => [createVNode(VList, null, {
                                        default: withCtx(() => [createVNode(VListItem, null, {
                                          default: withCtx(() => [createVNode(VListItemTitle, {
                                            class: "d-flex justify-center"
                                          }, {
                                            default: withCtx(() => [createVNode(VChip, {
                                              to: "/profile/user",
                                              size: "large",
                                              color: "black",
                                              variant: "outlined",
                                              class: "mb-2",
                                              onClick: ($event) => profileMenu.value = false
                                            }, {
                                              default: withCtx(() => [createVNode("p", {
                                                class: "text-lg"
                                              }, " View Profile ")]),
                                              _: 1
                                            }, 8, ["onClick"])]),
                                            _: 1
                                          })]),
                                          _: 1
                                        }), createVNode(VListItem, null, {
                                          default: withCtx(() => [createVNode(VListItemTitle, {
                                            class: "d-flex justify-center"
                                          }, {
                                            default: withCtx(() => [createVNode(VChip, {
                                              size: "large",
                                              color: "black",
                                              variant: "outlined",
                                              onClick: logout
                                            }, {
                                              default: withCtx(() => [createVNode("p", {
                                                class: "text-lg"
                                              }, " Logout ")]),
                                              _: 1
                                            })]),
                                            _: 1
                                          })]),
                                          _: 1
                                        })]),
                                        _: 1
                                      })]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"]))];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                              _push5(ssrRenderComponent(VAppBarNavIcon, {
                                class: "hidden-md-and-up",
                                width: "50",
                                tile: "",
                                ripple: false,
                                flat: true,
                                "active-color": void 0,
                                "base-color": void 0,
                                elevation: 0,
                                variant: "plain",
                                onClick: ($event) => drawer.value = !drawer.value
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [createVNode("div", {
                                class: "box2 toolbar flex"
                              }, [createVNode(VToolbarItems, {
                                class: "box4 ml-auto flex justify-between items-center hidden-sm-and-down"
                              }, {
                                default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(menuItems.slice(0, visibleMenuItems.value), (item) => {
                                  return openBlock(), createBlock(VChip, {
                                    key: item.title,
                                    size: "large",
                                    color: "black",
                                    variant: "text",
                                    to: item.link,
                                    class: "m-4"
                                  }, {
                                    default: withCtx(() => [createVNode("p", {
                                      class: "text-lg"
                                    }, toDisplayString(item.title), 1)]),
                                    _: 2
                                  }, 1032, ["to"]);
                                }), 128)), !userLoggedIn.value ? (openBlock(), createBlock(VChip, {
                                  key: 0,
                                  size: "large",
                                  color: "black",
                                  variant: "outlined",
                                  class: "m-4",
                                  onClick: ($event) => redirect("login")
                                }, {
                                  default: withCtx(() => [createVNode("p", {
                                    class: "text-lg"
                                  }, " Login ")]),
                                  _: 1
                                }, 8, ["onClick"])) : (openBlock(), createBlock(VMenu, {
                                  key: 1,
                                  modelValue: profileMenu.value,
                                  "onUpdate:modelValue": ($event) => profileMenu.value = $event,
                                  offset: [40, 35],
                                  transition: "slide-y-transition"
                                }, {
                                  activator: withCtx(({
                                    props
                                  }) => [createVNode(VChip, mergeProps(props, {
                                    size: "large",
                                    color: "black",
                                    variant: "outlined",
                                    class: "m-4"
                                  }), {
                                    default: withCtx(() => [createVNode("p", {
                                      class: "text-lg"
                                    }, " Profile ")]),
                                    _: 2
                                  }, 1040)]),
                                  default: withCtx(() => [createVNode(VList, null, {
                                    default: withCtx(() => [createVNode(VListItem, null, {
                                      default: withCtx(() => [createVNode(VListItemTitle, {
                                        class: "d-flex justify-center"
                                      }, {
                                        default: withCtx(() => [createVNode(VChip, {
                                          to: "/profile/user",
                                          size: "large",
                                          color: "black",
                                          variant: "outlined",
                                          class: "mb-2",
                                          onClick: ($event) => profileMenu.value = false
                                        }, {
                                          default: withCtx(() => [createVNode("p", {
                                            class: "text-lg"
                                          }, " View Profile ")]),
                                          _: 1
                                        }, 8, ["onClick"])]),
                                        _: 1
                                      })]),
                                      _: 1
                                    }), createVNode(VListItem, null, {
                                      default: withCtx(() => [createVNode(VListItemTitle, {
                                        class: "d-flex justify-center"
                                      }, {
                                        default: withCtx(() => [createVNode(VChip, {
                                          size: "large",
                                          color: "black",
                                          variant: "outlined",
                                          onClick: logout
                                        }, {
                                          default: withCtx(() => [createVNode("p", {
                                            class: "text-lg"
                                          }, " Logout ")]),
                                          _: 1
                                        })]),
                                        _: 1
                                      })]),
                                      _: 1
                                    })]),
                                    _: 1
                                  })]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"]))]),
                                _: 1
                              })]), createVNode(VAppBarNavIcon, {
                                class: "hidden-md-and-up",
                                width: "50",
                                tile: "",
                                ripple: false,
                                flat: true,
                                "active-color": void 0,
                                "base-color": void 0,
                                elevation: 0,
                                variant: "plain",
                                onClick: withModifiers(($event) => drawer.value = !drawer.value, ["stop"])
                              }, null, 8, ["onClick"])];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [createVNode(VCol, {
                          cols: "auto"
                        }, {
                          default: withCtx(() => [createVNode(_component_nuxt_link, {
                            to: "/",
                            class: "logo"
                          }, {
                            default: withCtx(() => [createVNode("img", {
                              src: _imports_0,
                              alt: "Logo",
                              class: "box2 logo-image"
                            })]),
                            _: 1
                          })]),
                          _: 1
                        }), createVNode(VSpacer), createVNode(VCol, {
                          cols: "auto",
                          class: "box2 d-flex justify-end"
                        }, {
                          default: withCtx(() => [createVNode("div", {
                            class: "box2 toolbar flex"
                          }, [createVNode(VToolbarItems, {
                            class: "box4 ml-auto flex justify-between items-center hidden-sm-and-down"
                          }, {
                            default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(menuItems.slice(0, visibleMenuItems.value), (item) => {
                              return openBlock(), createBlock(VChip, {
                                key: item.title,
                                size: "large",
                                color: "black",
                                variant: "text",
                                to: item.link,
                                class: "m-4"
                              }, {
                                default: withCtx(() => [createVNode("p", {
                                  class: "text-lg"
                                }, toDisplayString(item.title), 1)]),
                                _: 2
                              }, 1032, ["to"]);
                            }), 128)), !userLoggedIn.value ? (openBlock(), createBlock(VChip, {
                              key: 0,
                              size: "large",
                              color: "black",
                              variant: "outlined",
                              class: "m-4",
                              onClick: ($event) => redirect("login")
                            }, {
                              default: withCtx(() => [createVNode("p", {
                                class: "text-lg"
                              }, " Login ")]),
                              _: 1
                            }, 8, ["onClick"])) : (openBlock(), createBlock(VMenu, {
                              key: 1,
                              modelValue: profileMenu.value,
                              "onUpdate:modelValue": ($event) => profileMenu.value = $event,
                              offset: [40, 35],
                              transition: "slide-y-transition"
                            }, {
                              activator: withCtx(({
                                props
                              }) => [createVNode(VChip, mergeProps(props, {
                                size: "large",
                                color: "black",
                                variant: "outlined",
                                class: "m-4"
                              }), {
                                default: withCtx(() => [createVNode("p", {
                                  class: "text-lg"
                                }, " Profile ")]),
                                _: 2
                              }, 1040)]),
                              default: withCtx(() => [createVNode(VList, null, {
                                default: withCtx(() => [createVNode(VListItem, null, {
                                  default: withCtx(() => [createVNode(VListItemTitle, {
                                    class: "d-flex justify-center"
                                  }, {
                                    default: withCtx(() => [createVNode(VChip, {
                                      to: "/profile/user",
                                      size: "large",
                                      color: "black",
                                      variant: "outlined",
                                      class: "mb-2",
                                      onClick: ($event) => profileMenu.value = false
                                    }, {
                                      default: withCtx(() => [createVNode("p", {
                                        class: "text-lg"
                                      }, " View Profile ")]),
                                      _: 1
                                    }, 8, ["onClick"])]),
                                    _: 1
                                  })]),
                                  _: 1
                                }), createVNode(VListItem, null, {
                                  default: withCtx(() => [createVNode(VListItemTitle, {
                                    class: "d-flex justify-center"
                                  }, {
                                    default: withCtx(() => [createVNode(VChip, {
                                      size: "large",
                                      color: "black",
                                      variant: "outlined",
                                      onClick: logout
                                    }, {
                                      default: withCtx(() => [createVNode("p", {
                                        class: "text-lg"
                                      }, " Logout ")]),
                                      _: 1
                                    })]),
                                    _: 1
                                  })]),
                                  _: 1
                                })]),
                                _: 1
                              })]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]))]),
                            _: 1
                          })]), createVNode(VAppBarNavIcon, {
                            class: "hidden-md-and-up",
                            width: "50",
                            tile: "",
                            ripple: false,
                            flat: true,
                            "active-color": void 0,
                            "base-color": void 0,
                            elevation: 0,
                            variant: "plain",
                            onClick: withModifiers(($event) => drawer.value = !drawer.value, ["stop"])
                          }, null, 8, ["onClick"])]),
                          _: 1
                        })];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [createVNode(VRow, {
                    class: "box5",
                    "no-gutters": ""
                  }, {
                    default: withCtx(() => [createVNode(VCol, {
                      cols: "auto"
                    }, {
                      default: withCtx(() => [createVNode(_component_nuxt_link, {
                        to: "/",
                        class: "logo"
                      }, {
                        default: withCtx(() => [createVNode("img", {
                          src: _imports_0,
                          alt: "Logo",
                          class: "box2 logo-image"
                        })]),
                        _: 1
                      })]),
                      _: 1
                    }), createVNode(VSpacer), createVNode(VCol, {
                      cols: "auto",
                      class: "box2 d-flex justify-end"
                    }, {
                      default: withCtx(() => [createVNode("div", {
                        class: "box2 toolbar flex"
                      }, [createVNode(VToolbarItems, {
                        class: "box4 ml-auto flex justify-between items-center hidden-sm-and-down"
                      }, {
                        default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(menuItems.slice(0, visibleMenuItems.value), (item) => {
                          return openBlock(), createBlock(VChip, {
                            key: item.title,
                            size: "large",
                            color: "black",
                            variant: "text",
                            to: item.link,
                            class: "m-4"
                          }, {
                            default: withCtx(() => [createVNode("p", {
                              class: "text-lg"
                            }, toDisplayString(item.title), 1)]),
                            _: 2
                          }, 1032, ["to"]);
                        }), 128)), !userLoggedIn.value ? (openBlock(), createBlock(VChip, {
                          key: 0,
                          size: "large",
                          color: "black",
                          variant: "outlined",
                          class: "m-4",
                          onClick: ($event) => redirect("login")
                        }, {
                          default: withCtx(() => [createVNode("p", {
                            class: "text-lg"
                          }, " Login ")]),
                          _: 1
                        }, 8, ["onClick"])) : (openBlock(), createBlock(VMenu, {
                          key: 1,
                          modelValue: profileMenu.value,
                          "onUpdate:modelValue": ($event) => profileMenu.value = $event,
                          offset: [40, 35],
                          transition: "slide-y-transition"
                        }, {
                          activator: withCtx(({
                            props
                          }) => [createVNode(VChip, mergeProps(props, {
                            size: "large",
                            color: "black",
                            variant: "outlined",
                            class: "m-4"
                          }), {
                            default: withCtx(() => [createVNode("p", {
                              class: "text-lg"
                            }, " Profile ")]),
                            _: 2
                          }, 1040)]),
                          default: withCtx(() => [createVNode(VList, null, {
                            default: withCtx(() => [createVNode(VListItem, null, {
                              default: withCtx(() => [createVNode(VListItemTitle, {
                                class: "d-flex justify-center"
                              }, {
                                default: withCtx(() => [createVNode(VChip, {
                                  to: "/profile/user",
                                  size: "large",
                                  color: "black",
                                  variant: "outlined",
                                  class: "mb-2",
                                  onClick: ($event) => profileMenu.value = false
                                }, {
                                  default: withCtx(() => [createVNode("p", {
                                    class: "text-lg"
                                  }, " View Profile ")]),
                                  _: 1
                                }, 8, ["onClick"])]),
                                _: 1
                              })]),
                              _: 1
                            }), createVNode(VListItem, null, {
                              default: withCtx(() => [createVNode(VListItemTitle, {
                                class: "d-flex justify-center"
                              }, {
                                default: withCtx(() => [createVNode(VChip, {
                                  size: "large",
                                  color: "black",
                                  variant: "outlined",
                                  onClick: logout
                                }, {
                                  default: withCtx(() => [createVNode("p", {
                                    class: "text-lg"
                                  }, " Logout ")]),
                                  _: 1
                                })]),
                                _: 1
                              })]),
                              _: 1
                            })]),
                            _: 1
                          })]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]))]),
                        _: 1
                      })]), createVNode(VAppBarNavIcon, {
                        class: "hidden-md-and-up",
                        width: "50",
                        tile: "",
                        ripple: false,
                        flat: true,
                        "active-color": void 0,
                        "base-color": void 0,
                        elevation: 0,
                        variant: "plain",
                        onClick: withModifiers(($event) => drawer.value = !drawer.value, ["stop"])
                      }, null, 8, ["onClick"])]),
                      _: 1
                    })]),
                    _: 1
                  })];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [createVNode("div", {
              class: "max-width-1600 w-100"
            }, [createVNode(VContainer, {
              class: "width-100 max-width-1600 px-4",
              fluid: ""
            }, {
              default: withCtx(() => [createVNode(VRow, {
                class: "box5",
                "no-gutters": ""
              }, {
                default: withCtx(() => [createVNode(VCol, {
                  cols: "auto"
                }, {
                  default: withCtx(() => [createVNode(_component_nuxt_link, {
                    to: "/",
                    class: "logo"
                  }, {
                    default: withCtx(() => [createVNode("img", {
                      src: _imports_0,
                      alt: "Logo",
                      class: "box2 logo-image"
                    })]),
                    _: 1
                  })]),
                  _: 1
                }), createVNode(VSpacer), createVNode(VCol, {
                  cols: "auto",
                  class: "box2 d-flex justify-end"
                }, {
                  default: withCtx(() => [createVNode("div", {
                    class: "box2 toolbar flex"
                  }, [createVNode(VToolbarItems, {
                    class: "box4 ml-auto flex justify-between items-center hidden-sm-and-down"
                  }, {
                    default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(menuItems.slice(0, visibleMenuItems.value), (item) => {
                      return openBlock(), createBlock(VChip, {
                        key: item.title,
                        size: "large",
                        color: "black",
                        variant: "text",
                        to: item.link,
                        class: "m-4"
                      }, {
                        default: withCtx(() => [createVNode("p", {
                          class: "text-lg"
                        }, toDisplayString(item.title), 1)]),
                        _: 2
                      }, 1032, ["to"]);
                    }), 128)), !userLoggedIn.value ? (openBlock(), createBlock(VChip, {
                      key: 0,
                      size: "large",
                      color: "black",
                      variant: "outlined",
                      class: "m-4",
                      onClick: ($event) => redirect("login")
                    }, {
                      default: withCtx(() => [createVNode("p", {
                        class: "text-lg"
                      }, " Login ")]),
                      _: 1
                    }, 8, ["onClick"])) : (openBlock(), createBlock(VMenu, {
                      key: 1,
                      modelValue: profileMenu.value,
                      "onUpdate:modelValue": ($event) => profileMenu.value = $event,
                      offset: [40, 35],
                      transition: "slide-y-transition"
                    }, {
                      activator: withCtx(({
                        props
                      }) => [createVNode(VChip, mergeProps(props, {
                        size: "large",
                        color: "black",
                        variant: "outlined",
                        class: "m-4"
                      }), {
                        default: withCtx(() => [createVNode("p", {
                          class: "text-lg"
                        }, " Profile ")]),
                        _: 2
                      }, 1040)]),
                      default: withCtx(() => [createVNode(VList, null, {
                        default: withCtx(() => [createVNode(VListItem, null, {
                          default: withCtx(() => [createVNode(VListItemTitle, {
                            class: "d-flex justify-center"
                          }, {
                            default: withCtx(() => [createVNode(VChip, {
                              to: "/profile/user",
                              size: "large",
                              color: "black",
                              variant: "outlined",
                              class: "mb-2",
                              onClick: ($event) => profileMenu.value = false
                            }, {
                              default: withCtx(() => [createVNode("p", {
                                class: "text-lg"
                              }, " View Profile ")]),
                              _: 1
                            }, 8, ["onClick"])]),
                            _: 1
                          })]),
                          _: 1
                        }), createVNode(VListItem, null, {
                          default: withCtx(() => [createVNode(VListItemTitle, {
                            class: "d-flex justify-center"
                          }, {
                            default: withCtx(() => [createVNode(VChip, {
                              size: "large",
                              color: "black",
                              variant: "outlined",
                              onClick: logout
                            }, {
                              default: withCtx(() => [createVNode("p", {
                                class: "text-lg"
                              }, " Logout ")]),
                              _: 1
                            })]),
                            _: 1
                          })]),
                          _: 1
                        })]),
                        _: 1
                      })]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]))]),
                    _: 1
                  })]), createVNode(VAppBarNavIcon, {
                    class: "hidden-md-and-up",
                    width: "50",
                    tile: "",
                    ripple: false,
                    flat: true,
                    "active-color": void 0,
                    "base-color": void 0,
                    elevation: 0,
                    variant: "plain",
                    onClick: withModifiers(($event) => drawer.value = !drawer.value, ["stop"])
                  }, null, 8, ["onClick"])]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            })])];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header>`);
      _push(ssrRenderComponent(VDialog, {
        modelValue: drawer.value,
        "onUpdate:modelValue": ($event) => drawer.value = $event,
        fullscreen: "",
        transition: "dialog-bottom-transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, {
              class: "d-flex flex-column",
              style: {
                "background-color": "#ecf1ff",
                "height": "100%"
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VList, {
                    class: "pa-6 d-flex flex-column",
                    style: {
                      "height": "100%"
                    }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex justify-space-between mb-10" data-v-45b070e2${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_nuxt_link, {
                          to: "/",
                          class: "logo"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<img${ssrRenderAttr("src", _imports_0)} alt="Logo" class="box2 logo-image" data-v-45b070e2${_scopeId4}>`);
                            } else {
                              return [createVNode("img", {
                                src: _imports_0,
                                alt: "Logo",
                                class: "box2 logo-image"
                              })];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          icon: "",
                          onClick: ($event) => drawer.value = !drawer.value
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-close`);
                                  } else {
                                    return [createTextVNode("mdi-close")];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [createVNode(VIcon, null, {
                                default: withCtx(() => [createTextVNode("mdi-close")]),
                                _: 1
                              })];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="d-flex flex-column align-center" style="${ssrRenderStyle({
                          "margin-top": "5%"
                        })}" data-v-45b070e2${_scopeId3}><!--[-->`);
                        ssrRenderList(menuItems, (item) => {
                          _push4(ssrRenderComponent(VChip, {
                            key: item.title,
                            to: item.link,
                            size: "large",
                            color: "black",
                            variant: "text",
                            class: "mb-4",
                            onClick: ($event) => drawer.value = !drawer.value
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<p class="text-lg" data-v-45b070e2${_scopeId4}>${ssrInterpolate(item.title)}</p>`);
                              } else {
                                return [createVNode("p", {
                                  class: "text-lg"
                                }, toDisplayString(item.title), 1)];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]--></div><div class="d-flex flex-column align-center" data-v-45b070e2${_scopeId3}>`);
                        if (!userLoggedIn.value) {
                          _push4(ssrRenderComponent(VChip, {
                            to: "/login",
                            size: "large",
                            color: "black",
                            variant: "outlined",
                            class: "mb-4",
                            onClick: ($event) => drawer.value = !drawer.value
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<p class="text-lg" data-v-45b070e2${_scopeId4}> Login </p>`);
                              } else {
                                return [createVNode("p", {
                                  class: "text-lg"
                                }, " Login ")];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(VChip, {
                            to: "/profile/user",
                            size: "large",
                            color: "black",
                            variant: "outlined",
                            class: "mb-4",
                            onClick: ($event) => drawer.value = !drawer.value
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<p class="text-lg" data-v-45b070e2${_scopeId4}> View Profile </p>`);
                              } else {
                                return [createVNode("p", {
                                  class: "text-lg"
                                }, " View Profile ")];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        }
                        if (userLoggedIn.value) {
                          _push4(ssrRenderComponent(VChip, {
                            size: "large",
                            color: "black",
                            variant: "outlined",
                            class: "mb-4",
                            onClick: [logout, ($event) => drawer.value = !drawer.value]
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<p class="text-lg" data-v-45b070e2${_scopeId4}> Logout </p>`);
                              } else {
                                return [createVNode("p", {
                                  class: "text-lg"
                                }, " Logout ")];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [createVNode("div", {
                          class: "d-flex justify-space-between mb-10"
                        }, [createVNode(_component_nuxt_link, {
                          to: "/",
                          class: "logo"
                        }, {
                          default: withCtx(() => [createVNode("img", {
                            src: _imports_0,
                            alt: "Logo",
                            class: "box2 logo-image"
                          })]),
                          _: 1
                        }), createVNode(VBtn, {
                          icon: "",
                          onClick: withModifiers(($event) => drawer.value = !drawer.value, ["stop"])
                        }, {
                          default: withCtx(() => [createVNode(VIcon, null, {
                            default: withCtx(() => [createTextVNode("mdi-close")]),
                            _: 1
                          })]),
                          _: 1
                        }, 8, ["onClick"])]), createVNode("div", {
                          class: "d-flex flex-column align-center",
                          style: {
                            "margin-top": "5%"
                          }
                        }, [(openBlock(), createBlock(Fragment, null, renderList(menuItems, (item) => {
                          return createVNode(VChip, {
                            key: item.title,
                            to: item.link,
                            size: "large",
                            color: "black",
                            variant: "text",
                            class: "mb-4",
                            onClick: withModifiers(($event) => drawer.value = !drawer.value, ["stop"])
                          }, {
                            default: withCtx(() => [createVNode("p", {
                              class: "text-lg"
                            }, toDisplayString(item.title), 1)]),
                            _: 2
                          }, 1032, ["to", "onClick"]);
                        }), 64))]), createVNode("div", {
                          class: "d-flex flex-column align-center"
                        }, [!userLoggedIn.value ? (openBlock(), createBlock(VChip, {
                          key: 0,
                          to: "/login",
                          size: "large",
                          color: "black",
                          variant: "outlined",
                          class: "mb-4",
                          onClick: withModifiers(($event) => drawer.value = !drawer.value, ["stop"])
                        }, {
                          default: withCtx(() => [createVNode("p", {
                            class: "text-lg"
                          }, " Login ")]),
                          _: 1
                        }, 8, ["onClick"])) : (openBlock(), createBlock(VChip, {
                          key: 1,
                          to: "/profile/user",
                          size: "large",
                          color: "black",
                          variant: "outlined",
                          class: "mb-4",
                          onClick: withModifiers(($event) => drawer.value = !drawer.value, ["stop"])
                        }, {
                          default: withCtx(() => [createVNode("p", {
                            class: "text-lg"
                          }, " View Profile ")]),
                          _: 1
                        }, 8, ["onClick"])), userLoggedIn.value ? (openBlock(), createBlock(VChip, {
                          key: 2,
                          size: "large",
                          color: "black",
                          variant: "outlined",
                          class: "mb-4",
                          onClick: [logout, withModifiers(($event) => drawer.value = !drawer.value, ["stop"])]
                        }, {
                          default: withCtx(() => [createVNode("p", {
                            class: "text-lg"
                          }, " Logout ")]),
                          _: 1
                        }, 8, ["onClick"])) : createCommentVNode("", true)])];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [createVNode(VList, {
                    class: "pa-6 d-flex flex-column",
                    style: {
                      "height": "100%"
                    }
                  }, {
                    default: withCtx(() => [createVNode("div", {
                      class: "d-flex justify-space-between mb-10"
                    }, [createVNode(_component_nuxt_link, {
                      to: "/",
                      class: "logo"
                    }, {
                      default: withCtx(() => [createVNode("img", {
                        src: _imports_0,
                        alt: "Logo",
                        class: "box2 logo-image"
                      })]),
                      _: 1
                    }), createVNode(VBtn, {
                      icon: "",
                      onClick: withModifiers(($event) => drawer.value = !drawer.value, ["stop"])
                    }, {
                      default: withCtx(() => [createVNode(VIcon, null, {
                        default: withCtx(() => [createTextVNode("mdi-close")]),
                        _: 1
                      })]),
                      _: 1
                    }, 8, ["onClick"])]), createVNode("div", {
                      class: "d-flex flex-column align-center",
                      style: {
                        "margin-top": "5%"
                      }
                    }, [(openBlock(), createBlock(Fragment, null, renderList(menuItems, (item) => {
                      return createVNode(VChip, {
                        key: item.title,
                        to: item.link,
                        size: "large",
                        color: "black",
                        variant: "text",
                        class: "mb-4",
                        onClick: withModifiers(($event) => drawer.value = !drawer.value, ["stop"])
                      }, {
                        default: withCtx(() => [createVNode("p", {
                          class: "text-lg"
                        }, toDisplayString(item.title), 1)]),
                        _: 2
                      }, 1032, ["to", "onClick"]);
                    }), 64))]), createVNode("div", {
                      class: "d-flex flex-column align-center"
                    }, [!userLoggedIn.value ? (openBlock(), createBlock(VChip, {
                      key: 0,
                      to: "/login",
                      size: "large",
                      color: "black",
                      variant: "outlined",
                      class: "mb-4",
                      onClick: withModifiers(($event) => drawer.value = !drawer.value, ["stop"])
                    }, {
                      default: withCtx(() => [createVNode("p", {
                        class: "text-lg"
                      }, " Login ")]),
                      _: 1
                    }, 8, ["onClick"])) : (openBlock(), createBlock(VChip, {
                      key: 1,
                      to: "/profile/user",
                      size: "large",
                      color: "black",
                      variant: "outlined",
                      class: "mb-4",
                      onClick: withModifiers(($event) => drawer.value = !drawer.value, ["stop"])
                    }, {
                      default: withCtx(() => [createVNode("p", {
                        class: "text-lg"
                      }, " View Profile ")]),
                      _: 1
                    }, 8, ["onClick"])), userLoggedIn.value ? (openBlock(), createBlock(VChip, {
                      key: 2,
                      size: "large",
                      color: "black",
                      variant: "outlined",
                      class: "mb-4",
                      onClick: [logout, withModifiers(($event) => drawer.value = !drawer.value, ["stop"])]
                    }, {
                      default: withCtx(() => [createVNode("p", {
                        class: "text-lg"
                      }, " Logout ")]),
                      _: 1
                    }, 8, ["onClick"])) : createCommentVNode("", true)])]),
                    _: 1
                  })];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [createVNode(VCard, {
              class: "d-flex flex-column",
              style: {
                "background-color": "#ecf1ff",
                "height": "100%"
              }
            }, {
              default: withCtx(() => [createVNode(VList, {
                class: "pa-6 d-flex flex-column",
                style: {
                  "height": "100%"
                }
              }, {
                default: withCtx(() => [createVNode("div", {
                  class: "d-flex justify-space-between mb-10"
                }, [createVNode(_component_nuxt_link, {
                  to: "/",
                  class: "logo"
                }, {
                  default: withCtx(() => [createVNode("img", {
                    src: _imports_0,
                    alt: "Logo",
                    class: "box2 logo-image"
                  })]),
                  _: 1
                }), createVNode(VBtn, {
                  icon: "",
                  onClick: withModifiers(($event) => drawer.value = !drawer.value, ["stop"])
                }, {
                  default: withCtx(() => [createVNode(VIcon, null, {
                    default: withCtx(() => [createTextVNode("mdi-close")]),
                    _: 1
                  })]),
                  _: 1
                }, 8, ["onClick"])]), createVNode("div", {
                  class: "d-flex flex-column align-center",
                  style: {
                    "margin-top": "5%"
                  }
                }, [(openBlock(), createBlock(Fragment, null, renderList(menuItems, (item) => {
                  return createVNode(VChip, {
                    key: item.title,
                    to: item.link,
                    size: "large",
                    color: "black",
                    variant: "text",
                    class: "mb-4",
                    onClick: withModifiers(($event) => drawer.value = !drawer.value, ["stop"])
                  }, {
                    default: withCtx(() => [createVNode("p", {
                      class: "text-lg"
                    }, toDisplayString(item.title), 1)]),
                    _: 2
                  }, 1032, ["to", "onClick"]);
                }), 64))]), createVNode("div", {
                  class: "d-flex flex-column align-center"
                }, [!userLoggedIn.value ? (openBlock(), createBlock(VChip, {
                  key: 0,
                  to: "/login",
                  size: "large",
                  color: "black",
                  variant: "outlined",
                  class: "mb-4",
                  onClick: withModifiers(($event) => drawer.value = !drawer.value, ["stop"])
                }, {
                  default: withCtx(() => [createVNode("p", {
                    class: "text-lg"
                  }, " Login ")]),
                  _: 1
                }, 8, ["onClick"])) : (openBlock(), createBlock(VChip, {
                  key: 1,
                  to: "/profile/user",
                  size: "large",
                  color: "black",
                  variant: "outlined",
                  class: "mb-4",
                  onClick: withModifiers(($event) => drawer.value = !drawer.value, ["stop"])
                }, {
                  default: withCtx(() => [createVNode("p", {
                    class: "text-lg"
                  }, " View Profile ")]),
                  _: 1
                }, 8, ["onClick"])), userLoggedIn.value ? (openBlock(), createBlock(VChip, {
                  key: 2,
                  size: "large",
                  color: "black",
                  variant: "outlined",
                  class: "mb-4",
                  onClick: [logout, withModifiers(($event) => drawer.value = !drawer.value, ["stop"])]
                }, {
                  default: withCtx(() => [createVNode("p", {
                    class: "text-lg"
                  }, " Logout ")]),
                  _: 1
                }, 8, ["onClick"])) : createCommentVNode("", true)])]),
                _: 1
              })]),
              _: 1
            })];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: authDialogVisible.value,
        "onUpdate:modelValue": ($event) => authDialogVisible.value = $event,
        "max-width": "600px",
        "onClick:outside": closeAuthDialog
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(FirebaseAuthentication, {
              "initial-mode": authDialogMode.value,
              onClose: closeAuthDialog
            }, null, _parent2, _scopeId));
          } else {
            return [createVNode(FirebaseAuthentication, {
              "initial-mode": authDialogMode.value,
              onClose: closeAuthDialog
            }, null, 8, ["initial-mode"])];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-45b070e2"]]);
const _sfc_main = {
  data: () => ({
    companyLinks: [
      {
        title: "About us",
        link: "/company"
      },
      // { title: 'Careers', link: '/careers' },
      // { title: 'Our blogs', link: '/blogs' },
      {
        title: "Contact us",
        link: "/company"
      }
    ],
    resourceLinks: [{
      title: "University Help",
      link: "/admissions"
    }, {
      title: "Past Papers",
      link: "/past-papers-selector"
    }, {
      title: "1-to-1 Tutoring",
      link: "/tutoring"
    }],
    legalLinks: [{
      title: "Privacy policies",
      link: "/privacy-policy"
    }, {
      title: "Terms & conditions",
      link: "/terms-and-conditions"
    }],
    socialIcons: [{
      title: "mdi-facebook",
      link: "https://facebook.com"
    }, {
      title: "mdi-twitter",
      link: "https://x.com"
    }, {
      title: "mdi-linkedin",
      link: "https://linkedin.com"
    }]
  })
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(ssrRenderComponent(VFooter, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VContainer, {
          class: "width-100 max-width-1600 py-12"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VDivider, {
                class: "my-4 border-opacity-100"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VRow, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "3",
                      class: "mb-6 d-flex justify-center justify-md-start"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_nuxt_link, {
                            to: "/"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<img style="${ssrRenderStyle({
                                  "width": "108px"
                                })}"${ssrRenderAttr("src", _imports_0)} alt="Logo" data-v-d546d361${_scopeId5}>`);
                              } else {
                                return [createVNode("img", {
                                  style: {
                                    "width": "108px"
                                  },
                                  src: _imports_0,
                                  alt: "Logo"
                                })];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [createVNode(_component_nuxt_link, {
                            to: "/"
                          }, {
                            default: withCtx(() => [createVNode("img", {
                              style: {
                                "width": "108px"
                              },
                              src: _imports_0,
                              alt: "Logo"
                            })]),
                            _: 1
                          })];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "6",
                      md: "2"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<h1 class="text-lg md:text-xl font-weight-bold mb-4" data-v-d546d361${_scopeId4}> Company </h1>`);
                          _push5(ssrRenderComponent(VList, {
                            density: "compact",
                            nav: "",
                            class: "transparent pa-0"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<!--[-->`);
                                ssrRenderList(_ctx.companyLinks, (item) => {
                                  _push6(ssrRenderComponent(VListItem, {
                                    key: item.title,
                                    to: item.link,
                                    link: "",
                                    class: "pa-0"
                                  }, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(`<p class="text-sm md:text-base" data-v-d546d361${_scopeId6}>${ssrInterpolate(item.title)}</p>`);
                                      } else {
                                        return [createVNode("p", {
                                          class: "text-sm md:text-base"
                                        }, toDisplayString(item.title), 1)];
                                      }
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
                                });
                                _push6(`<!--]-->`);
                              } else {
                                return [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.companyLinks, (item) => {
                                  return openBlock(), createBlock(VListItem, {
                                    key: item.title,
                                    to: item.link,
                                    link: "",
                                    class: "pa-0"
                                  }, {
                                    default: withCtx(() => [createVNode("p", {
                                      class: "text-sm md:text-base"
                                    }, toDisplayString(item.title), 1)]),
                                    _: 2
                                  }, 1032, ["to"]);
                                }), 128))];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [createVNode("h1", {
                            class: "text-lg md:text-xl font-weight-bold mb-4"
                          }, " Company "), createVNode(VList, {
                            density: "compact",
                            nav: "",
                            class: "transparent pa-0"
                          }, {
                            default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.companyLinks, (item) => {
                              return openBlock(), createBlock(VListItem, {
                                key: item.title,
                                to: item.link,
                                link: "",
                                class: "pa-0"
                              }, {
                                default: withCtx(() => [createVNode("p", {
                                  class: "text-sm md:text-base"
                                }, toDisplayString(item.title), 1)]),
                                _: 2
                              }, 1032, ["to"]);
                            }), 128))]),
                            _: 1
                          })];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "6",
                      md: "2"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<h1 class="text-lg md:text-xl font-weight-bold mb-4" data-v-d546d361${_scopeId4}> Resources </h1>`);
                          _push5(ssrRenderComponent(VList, {
                            density: "compact",
                            nav: "",
                            class: "pa-0 transparent"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<!--[-->`);
                                ssrRenderList(_ctx.resourceLinks, (item) => {
                                  _push6(ssrRenderComponent(VListItem, {
                                    key: item.title,
                                    to: item.link,
                                    link: "",
                                    class: "pa-0"
                                  }, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(`<p class="text-sm md:text-base" data-v-d546d361${_scopeId6}>${ssrInterpolate(item.title)}</p>`);
                                      } else {
                                        return [createVNode("p", {
                                          class: "text-sm md:text-base"
                                        }, toDisplayString(item.title), 1)];
                                      }
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
                                });
                                _push6(`<!--]-->`);
                              } else {
                                return [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.resourceLinks, (item) => {
                                  return openBlock(), createBlock(VListItem, {
                                    key: item.title,
                                    to: item.link,
                                    link: "",
                                    class: "pa-0"
                                  }, {
                                    default: withCtx(() => [createVNode("p", {
                                      class: "text-sm md:text-base"
                                    }, toDisplayString(item.title), 1)]),
                                    _: 2
                                  }, 1032, ["to"]);
                                }), 128))];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [createVNode("h1", {
                            class: "text-lg md:text-xl font-weight-bold mb-4"
                          }, " Resources "), createVNode(VList, {
                            density: "compact",
                            nav: "",
                            class: "pa-0 transparent"
                          }, {
                            default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.resourceLinks, (item) => {
                              return openBlock(), createBlock(VListItem, {
                                key: item.title,
                                to: item.link,
                                link: "",
                                class: "pa-0"
                              }, {
                                default: withCtx(() => [createVNode("p", {
                                  class: "text-sm md:text-base"
                                }, toDisplayString(item.title), 1)]),
                                _: 2
                              }, 1032, ["to"]);
                            }), 128))]),
                            _: 1
                          })];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "6",
                      md: "2"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<h1 class="text-lg md:text-xl font-weight-bold mb-4" data-v-d546d361${_scopeId4}> Legal </h1>`);
                          _push5(ssrRenderComponent(VList, {
                            density: "compact",
                            nav: "",
                            class: "pa-0 transparent"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<!--[-->`);
                                ssrRenderList(_ctx.legalLinks, (item) => {
                                  _push6(ssrRenderComponent(VListItem, {
                                    key: item.title,
                                    to: item.link,
                                    link: "",
                                    class: "pa-0"
                                  }, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(`<p class="text-sm md:text-base" data-v-d546d361${_scopeId6}>${ssrInterpolate(item.title)}</p>`);
                                      } else {
                                        return [createVNode("p", {
                                          class: "text-sm md:text-base"
                                        }, toDisplayString(item.title), 1)];
                                      }
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
                                });
                                _push6(`<!--]-->`);
                              } else {
                                return [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.legalLinks, (item) => {
                                  return openBlock(), createBlock(VListItem, {
                                    key: item.title,
                                    to: item.link,
                                    link: "",
                                    class: "pa-0"
                                  }, {
                                    default: withCtx(() => [createVNode("p", {
                                      class: "text-sm md:text-base"
                                    }, toDisplayString(item.title), 1)]),
                                    _: 2
                                  }, 1032, ["to"]);
                                }), 128))];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [createVNode("h1", {
                            class: "text-lg md:text-xl font-weight-bold mb-4"
                          }, " Legal "), createVNode(VList, {
                            density: "compact",
                            nav: "",
                            class: "pa-0 transparent"
                          }, {
                            default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.legalLinks, (item) => {
                              return openBlock(), createBlock(VListItem, {
                                key: item.title,
                                to: item.link,
                                link: "",
                                class: "pa-0"
                              }, {
                                default: withCtx(() => [createVNode("p", {
                                  class: "text-sm md:text-base"
                                }, toDisplayString(item.title), 1)]),
                                _: 2
                              }, 1032, ["to"]);
                            }), 128))]),
                            _: 1
                          })];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "6",
                      md: "2"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<h1 class="text-lg md:text-xl font-weight-bold mb-4" data-v-d546d361${_scopeId4}> Connect With Us </h1><p class="mb-4 text-sm md:text-base" data-v-d546d361${_scopeId4}> solution@Studybyte.com </p><div class="d-flex" data-v-d546d361${_scopeId4}><!--[-->`);
                          ssrRenderList(_ctx.socialIcons, (icon) => {
                            _push5(ssrRenderComponent(VBtn, {
                              key: icon.title,
                              icon: "",
                              class: "mr-2 white--text"
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`<a${ssrRenderAttr("href", icon.link)} target="_blank" data-v-d546d361${_scopeId5}>`);
                                  _push6(ssrRenderComponent(VIcon, null, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(`${ssrInterpolate(icon.title)}`);
                                      } else {
                                        return [createTextVNode(toDisplayString(icon.title), 1)];
                                      }
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
                                  _push6(`</a>`);
                                } else {
                                  return [createVNode("a", {
                                    href: icon.link,
                                    target: "_blank"
                                  }, [createVNode(VIcon, null, {
                                    default: withCtx(() => [createTextVNode(toDisplayString(icon.title), 1)]),
                                    _: 2
                                  }, 1024)], 8, ["href"])];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          });
                          _push5(`<!--]--></div>`);
                        } else {
                          return [createVNode("h1", {
                            class: "text-lg md:text-xl font-weight-bold mb-4"
                          }, " Connect With Us "), createVNode("p", {
                            class: "mb-4 text-sm md:text-base"
                          }, " solution@Studybyte.com "), createVNode("div", {
                            class: "d-flex"
                          }, [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.socialIcons, (icon) => {
                            return openBlock(), createBlock(VBtn, {
                              key: icon.title,
                              icon: "",
                              class: "mr-2 white--text"
                            }, {
                              default: withCtx(() => [createVNode("a", {
                                href: icon.link,
                                target: "_blank"
                              }, [createVNode(VIcon, null, {
                                default: withCtx(() => [createTextVNode(toDisplayString(icon.title), 1)]),
                                _: 2
                              }, 1024)], 8, ["href"])]),
                              _: 2
                            }, 1024);
                          }), 128))])];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [createVNode(VCol, {
                      cols: "12",
                      md: "3",
                      class: "mb-6 d-flex justify-center justify-md-start"
                    }, {
                      default: withCtx(() => [createVNode(_component_nuxt_link, {
                        to: "/"
                      }, {
                        default: withCtx(() => [createVNode("img", {
                          style: {
                            "width": "108px"
                          },
                          src: _imports_0,
                          alt: "Logo"
                        })]),
                        _: 1
                      })]),
                      _: 1
                    }), createVNode(VCol, {
                      cols: "6",
                      md: "2"
                    }, {
                      default: withCtx(() => [createVNode("h1", {
                        class: "text-lg md:text-xl font-weight-bold mb-4"
                      }, " Company "), createVNode(VList, {
                        density: "compact",
                        nav: "",
                        class: "transparent pa-0"
                      }, {
                        default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.companyLinks, (item) => {
                          return openBlock(), createBlock(VListItem, {
                            key: item.title,
                            to: item.link,
                            link: "",
                            class: "pa-0"
                          }, {
                            default: withCtx(() => [createVNode("p", {
                              class: "text-sm md:text-base"
                            }, toDisplayString(item.title), 1)]),
                            _: 2
                          }, 1032, ["to"]);
                        }), 128))]),
                        _: 1
                      })]),
                      _: 1
                    }), createVNode(VCol, {
                      cols: "6",
                      md: "2"
                    }, {
                      default: withCtx(() => [createVNode("h1", {
                        class: "text-lg md:text-xl font-weight-bold mb-4"
                      }, " Resources "), createVNode(VList, {
                        density: "compact",
                        nav: "",
                        class: "pa-0 transparent"
                      }, {
                        default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.resourceLinks, (item) => {
                          return openBlock(), createBlock(VListItem, {
                            key: item.title,
                            to: item.link,
                            link: "",
                            class: "pa-0"
                          }, {
                            default: withCtx(() => [createVNode("p", {
                              class: "text-sm md:text-base"
                            }, toDisplayString(item.title), 1)]),
                            _: 2
                          }, 1032, ["to"]);
                        }), 128))]),
                        _: 1
                      })]),
                      _: 1
                    }), createVNode(VCol, {
                      cols: "6",
                      md: "2"
                    }, {
                      default: withCtx(() => [createVNode("h1", {
                        class: "text-lg md:text-xl font-weight-bold mb-4"
                      }, " Legal "), createVNode(VList, {
                        density: "compact",
                        nav: "",
                        class: "pa-0 transparent"
                      }, {
                        default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.legalLinks, (item) => {
                          return openBlock(), createBlock(VListItem, {
                            key: item.title,
                            to: item.link,
                            link: "",
                            class: "pa-0"
                          }, {
                            default: withCtx(() => [createVNode("p", {
                              class: "text-sm md:text-base"
                            }, toDisplayString(item.title), 1)]),
                            _: 2
                          }, 1032, ["to"]);
                        }), 128))]),
                        _: 1
                      })]),
                      _: 1
                    }), createVNode(VCol, {
                      cols: "6",
                      md: "2"
                    }, {
                      default: withCtx(() => [createVNode("h1", {
                        class: "text-lg md:text-xl font-weight-bold mb-4"
                      }, " Connect With Us "), createVNode("p", {
                        class: "mb-4 text-sm md:text-base"
                      }, " solution@Studybyte.com "), createVNode("div", {
                        class: "d-flex"
                      }, [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.socialIcons, (icon) => {
                        return openBlock(), createBlock(VBtn, {
                          key: icon.title,
                          icon: "",
                          class: "mr-2 white--text"
                        }, {
                          default: withCtx(() => [createVNode("a", {
                            href: icon.link,
                            target: "_blank"
                          }, [createVNode(VIcon, null, {
                            default: withCtx(() => [createTextVNode(toDisplayString(icon.title), 1)]),
                            _: 2
                          }, 1024)], 8, ["href"])]),
                          _: 2
                        }, 1024);
                      }), 128))])]),
                      _: 1
                    })];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VDivider, {
                class: "my-4 border-opacity-100"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VRow, {
                align: "center",
                justify: "space-between"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "auto"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p class="text-xs md:text-sm text-center text-md-left mb-0" data-v-d546d361${_scopeId4}> \xA9 2024 Studybyte Ltd. All Rights Reserved </p>`);
                        } else {
                          return [createVNode("p", {
                            class: "text-xs md:text-sm text-center text-md-left mb-0"
                          }, " \xA9 2024 Studybyte Ltd. All Rights Reserved ")];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "auto"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p class="text-xs md:text-sm text-center text-md-right mb-0" data-v-d546d361${_scopeId4}> Made with `);
                          _push5(ssrRenderComponent(VIcon, {
                            color: "red",
                            small: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` mdi-brain `);
                              } else {
                                return [createTextVNode(" mdi-brain ")];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(` by Studybyte </p>`);
                        } else {
                          return [createVNode("p", {
                            class: "text-xs md:text-sm text-center text-md-right mb-0"
                          }, [createTextVNode(" Made with "), createVNode(VIcon, {
                            color: "red",
                            small: ""
                          }, {
                            default: withCtx(() => [createTextVNode(" mdi-brain ")]),
                            _: 1
                          }), createTextVNode(" by Studybyte ")])];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [createVNode(VCol, {
                      cols: "12",
                      md: "auto"
                    }, {
                      default: withCtx(() => [createVNode("p", {
                        class: "text-xs md:text-sm text-center text-md-left mb-0"
                      }, " \xA9 2024 Studybyte Ltd. All Rights Reserved ")]),
                      _: 1
                    }), createVNode(VCol, {
                      cols: "12",
                      md: "auto"
                    }, {
                      default: withCtx(() => [createVNode("p", {
                        class: "text-xs md:text-sm text-center text-md-right mb-0"
                      }, [createTextVNode(" Made with "), createVNode(VIcon, {
                        color: "red",
                        small: ""
                      }, {
                        default: withCtx(() => [createTextVNode(" mdi-brain ")]),
                        _: 1
                      }), createTextVNode(" by Studybyte ")])]),
                      _: 1
                    })];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [createVNode(VDivider, {
                class: "my-4 border-opacity-100"
              }), createVNode(VRow, null, {
                default: withCtx(() => [createVNode(VCol, {
                  cols: "12",
                  md: "3",
                  class: "mb-6 d-flex justify-center justify-md-start"
                }, {
                  default: withCtx(() => [createVNode(_component_nuxt_link, {
                    to: "/"
                  }, {
                    default: withCtx(() => [createVNode("img", {
                      style: {
                        "width": "108px"
                      },
                      src: _imports_0,
                      alt: "Logo"
                    })]),
                    _: 1
                  })]),
                  _: 1
                }), createVNode(VCol, {
                  cols: "6",
                  md: "2"
                }, {
                  default: withCtx(() => [createVNode("h1", {
                    class: "text-lg md:text-xl font-weight-bold mb-4"
                  }, " Company "), createVNode(VList, {
                    density: "compact",
                    nav: "",
                    class: "transparent pa-0"
                  }, {
                    default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.companyLinks, (item) => {
                      return openBlock(), createBlock(VListItem, {
                        key: item.title,
                        to: item.link,
                        link: "",
                        class: "pa-0"
                      }, {
                        default: withCtx(() => [createVNode("p", {
                          class: "text-sm md:text-base"
                        }, toDisplayString(item.title), 1)]),
                        _: 2
                      }, 1032, ["to"]);
                    }), 128))]),
                    _: 1
                  })]),
                  _: 1
                }), createVNode(VCol, {
                  cols: "6",
                  md: "2"
                }, {
                  default: withCtx(() => [createVNode("h1", {
                    class: "text-lg md:text-xl font-weight-bold mb-4"
                  }, " Resources "), createVNode(VList, {
                    density: "compact",
                    nav: "",
                    class: "pa-0 transparent"
                  }, {
                    default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.resourceLinks, (item) => {
                      return openBlock(), createBlock(VListItem, {
                        key: item.title,
                        to: item.link,
                        link: "",
                        class: "pa-0"
                      }, {
                        default: withCtx(() => [createVNode("p", {
                          class: "text-sm md:text-base"
                        }, toDisplayString(item.title), 1)]),
                        _: 2
                      }, 1032, ["to"]);
                    }), 128))]),
                    _: 1
                  })]),
                  _: 1
                }), createVNode(VCol, {
                  cols: "6",
                  md: "2"
                }, {
                  default: withCtx(() => [createVNode("h1", {
                    class: "text-lg md:text-xl font-weight-bold mb-4"
                  }, " Legal "), createVNode(VList, {
                    density: "compact",
                    nav: "",
                    class: "pa-0 transparent"
                  }, {
                    default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.legalLinks, (item) => {
                      return openBlock(), createBlock(VListItem, {
                        key: item.title,
                        to: item.link,
                        link: "",
                        class: "pa-0"
                      }, {
                        default: withCtx(() => [createVNode("p", {
                          class: "text-sm md:text-base"
                        }, toDisplayString(item.title), 1)]),
                        _: 2
                      }, 1032, ["to"]);
                    }), 128))]),
                    _: 1
                  })]),
                  _: 1
                }), createVNode(VCol, {
                  cols: "6",
                  md: "2"
                }, {
                  default: withCtx(() => [createVNode("h1", {
                    class: "text-lg md:text-xl font-weight-bold mb-4"
                  }, " Connect With Us "), createVNode("p", {
                    class: "mb-4 text-sm md:text-base"
                  }, " solution@Studybyte.com "), createVNode("div", {
                    class: "d-flex"
                  }, [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.socialIcons, (icon) => {
                    return openBlock(), createBlock(VBtn, {
                      key: icon.title,
                      icon: "",
                      class: "mr-2 white--text"
                    }, {
                      default: withCtx(() => [createVNode("a", {
                        href: icon.link,
                        target: "_blank"
                      }, [createVNode(VIcon, null, {
                        default: withCtx(() => [createTextVNode(toDisplayString(icon.title), 1)]),
                        _: 2
                      }, 1024)], 8, ["href"])]),
                      _: 2
                    }, 1024);
                  }), 128))])]),
                  _: 1
                })]),
                _: 1
              }), createVNode(VDivider, {
                class: "my-4 border-opacity-100"
              }), createVNode(VRow, {
                align: "center",
                justify: "space-between"
              }, {
                default: withCtx(() => [createVNode(VCol, {
                  cols: "12",
                  md: "auto"
                }, {
                  default: withCtx(() => [createVNode("p", {
                    class: "text-xs md:text-sm text-center text-md-left mb-0"
                  }, " \xA9 2024 Studybyte Ltd. All Rights Reserved ")]),
                  _: 1
                }), createVNode(VCol, {
                  cols: "12",
                  md: "auto"
                }, {
                  default: withCtx(() => [createVNode("p", {
                    class: "text-xs md:text-sm text-center text-md-right mb-0"
                  }, [createTextVNode(" Made with "), createVNode(VIcon, {
                    color: "red",
                    small: ""
                  }, {
                    default: withCtx(() => [createTextVNode(" mdi-brain ")]),
                    _: 1
                  }), createTextVNode(" by Studybyte ")])]),
                  _: 1
                })]),
                _: 1
              })];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [createVNode(VContainer, {
          class: "width-100 max-width-1600 py-12"
        }, {
          default: withCtx(() => [createVNode(VDivider, {
            class: "my-4 border-opacity-100"
          }), createVNode(VRow, null, {
            default: withCtx(() => [createVNode(VCol, {
              cols: "12",
              md: "3",
              class: "mb-6 d-flex justify-center justify-md-start"
            }, {
              default: withCtx(() => [createVNode(_component_nuxt_link, {
                to: "/"
              }, {
                default: withCtx(() => [createVNode("img", {
                  style: {
                    "width": "108px"
                  },
                  src: _imports_0,
                  alt: "Logo"
                })]),
                _: 1
              })]),
              _: 1
            }), createVNode(VCol, {
              cols: "6",
              md: "2"
            }, {
              default: withCtx(() => [createVNode("h1", {
                class: "text-lg md:text-xl font-weight-bold mb-4"
              }, " Company "), createVNode(VList, {
                density: "compact",
                nav: "",
                class: "transparent pa-0"
              }, {
                default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.companyLinks, (item) => {
                  return openBlock(), createBlock(VListItem, {
                    key: item.title,
                    to: item.link,
                    link: "",
                    class: "pa-0"
                  }, {
                    default: withCtx(() => [createVNode("p", {
                      class: "text-sm md:text-base"
                    }, toDisplayString(item.title), 1)]),
                    _: 2
                  }, 1032, ["to"]);
                }), 128))]),
                _: 1
              })]),
              _: 1
            }), createVNode(VCol, {
              cols: "6",
              md: "2"
            }, {
              default: withCtx(() => [createVNode("h1", {
                class: "text-lg md:text-xl font-weight-bold mb-4"
              }, " Resources "), createVNode(VList, {
                density: "compact",
                nav: "",
                class: "pa-0 transparent"
              }, {
                default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.resourceLinks, (item) => {
                  return openBlock(), createBlock(VListItem, {
                    key: item.title,
                    to: item.link,
                    link: "",
                    class: "pa-0"
                  }, {
                    default: withCtx(() => [createVNode("p", {
                      class: "text-sm md:text-base"
                    }, toDisplayString(item.title), 1)]),
                    _: 2
                  }, 1032, ["to"]);
                }), 128))]),
                _: 1
              })]),
              _: 1
            }), createVNode(VCol, {
              cols: "6",
              md: "2"
            }, {
              default: withCtx(() => [createVNode("h1", {
                class: "text-lg md:text-xl font-weight-bold mb-4"
              }, " Legal "), createVNode(VList, {
                density: "compact",
                nav: "",
                class: "pa-0 transparent"
              }, {
                default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.legalLinks, (item) => {
                  return openBlock(), createBlock(VListItem, {
                    key: item.title,
                    to: item.link,
                    link: "",
                    class: "pa-0"
                  }, {
                    default: withCtx(() => [createVNode("p", {
                      class: "text-sm md:text-base"
                    }, toDisplayString(item.title), 1)]),
                    _: 2
                  }, 1032, ["to"]);
                }), 128))]),
                _: 1
              })]),
              _: 1
            }), createVNode(VCol, {
              cols: "6",
              md: "2"
            }, {
              default: withCtx(() => [createVNode("h1", {
                class: "text-lg md:text-xl font-weight-bold mb-4"
              }, " Connect With Us "), createVNode("p", {
                class: "mb-4 text-sm md:text-base"
              }, " solution@Studybyte.com "), createVNode("div", {
                class: "d-flex"
              }, [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.socialIcons, (icon) => {
                return openBlock(), createBlock(VBtn, {
                  key: icon.title,
                  icon: "",
                  class: "mr-2 white--text"
                }, {
                  default: withCtx(() => [createVNode("a", {
                    href: icon.link,
                    target: "_blank"
                  }, [createVNode(VIcon, null, {
                    default: withCtx(() => [createTextVNode(toDisplayString(icon.title), 1)]),
                    _: 2
                  }, 1024)], 8, ["href"])]),
                  _: 2
                }, 1024);
              }), 128))])]),
              _: 1
            })]),
            _: 1
          }), createVNode(VDivider, {
            class: "my-4 border-opacity-100"
          }), createVNode(VRow, {
            align: "center",
            justify: "space-between"
          }, {
            default: withCtx(() => [createVNode(VCol, {
              cols: "12",
              md: "auto"
            }, {
              default: withCtx(() => [createVNode("p", {
                class: "text-xs md:text-sm text-center text-md-left mb-0"
              }, " \xA9 2024 Studybyte Ltd. All Rights Reserved ")]),
              _: 1
            }), createVNode(VCol, {
              cols: "12",
              md: "auto"
            }, {
              default: withCtx(() => [createVNode("p", {
                class: "text-xs md:text-sm text-center text-md-right mb-0"
              }, [createTextVNode(" Made with "), createVNode(VIcon, {
                color: "red",
                small: ""
              }, {
                default: withCtx(() => [createTextVNode(" mdi-brain ")]),
                _: 1
              }), createTextVNode(" by Studybyte ")])]),
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d546d361"]]);

export { __nuxt_component_0 as _, __nuxt_component_2 as a };
//# sourceMappingURL=MainFooter-BNGkDk0i.mjs.map
