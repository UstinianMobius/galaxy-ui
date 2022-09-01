import { defineComponent, ref, onMounted, openBlock, createElementBlock, toDisplayString, createVNode } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TemplateButton",
  props: {
    name: { default: "Template Button" },
    age: { default: () => [18] }
  },
  setup(__props) {
    const props2 = __props;
    const buttonRef = ref(null);
    onMounted(() => {
      console.log("buttonRef", buttonRef.value);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        ref_key: "buttonRef",
        ref: buttonRef
      }, toDisplayString(props2.name), 513);
    };
  }
});
const __uno = "";
const props = {
  size: {
    type: String,
    default: "medium"
  },
  color: {
    type: String,
    default: "blue"
  },
  round: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ""
  }
};
const GButton = defineComponent({
  name: "GButton",
  props,
  setup(props2, {
    slots
  }) {
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm"
      },
      medium: {
        x: "3",
        y: "1.5",
        text: "base"
      },
      large: {
        x: "4",
        y: "2",
        text: "lg"
      }
    };
    return () => createVNode("button", {
      "class": `
                    py-${size[props2.size].y}
                    px-${size[props2.size].x}
                    ${props2.round ? "rounded-full" : "rounded-lg"}
                    bg-${props2.color}-${props2.plain ? "100" : "500"}
                    hover:bg-${props2.color}-400
                    border-${props2.color}-${props2.plain ? "500" : "500"}
                    cursor-pointer
                    border-solid
                    text-${props2.plain ? props2.color + "-500" : "white"}
                    text-${size[props2.size].text}
                    hover:text-white
                    transition duration-300 ease-in-out transform hover:scale-105
                    mx-1
                `
    }, [props2.icon !== "" ? createVNode("i", {
      "class": `i-ic-baseline-${props2.icon} p-3`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
const main = {
  install(app) {
    app.component(_sfc_main.__name, _sfc_main);
    app.component(GButton.name, GButton);
  }
};
export {
  GButton,
  _sfc_main as TemplateButton,
  main as default
};
//# sourceMappingURL=galaxy-ui.es.js.map
