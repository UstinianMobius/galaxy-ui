import GButton from "../GButton";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

// 测试分组
describe("GButton", () => {
  // mount
  test("mount @vue/test-utils", () => {
    // @vue/test-utils
    const wrapper = shallowMount(GButton, {
      slots: {
        default: "GButton",
      },
    });
    // 断言
    expect(wrapper.text()).toBe("GButton");
  });
});

describe("color", () => {
  test("default", () => {
    const wrapper = shallowMount(GButton, {
      slots: {
        default: "GButton",
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("bg-blue-500")
    ).toBe(true);
  });

  test("red", () => {
    const wrapper = shallowMount(GButton, {
      slots: {
        default: "GButton",
      },
      props: {
        color: "red",
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("bg-red-500")
    ).toBe(true);
  });
});

describe("round", () => {
  test("default", () => {
    const wrapper = shallowMount(GButton, {
      slots: {
        default: "GButton",
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("rounded-lg")
    ).toBe(true);
  });

  test("icon", () => {
    const wrapper = shallowMount(GButton, {
      slots: {
        default: "GButton",
      },
      props: {
        icon: "edit",
      },
    });

    expect(
      wrapper
        .find("i")
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("i-ic-baseline-edit")
    ).toBe(true);
  });
});
