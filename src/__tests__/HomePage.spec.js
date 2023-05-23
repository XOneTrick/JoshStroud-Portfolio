import React from "react";
import { shallow } from "enzyme";
import { act } from "react-dom/test-utils";
import HomePage from "../Pages/Home/HomePage";

describe("HomePage", () => {
  it("calls particlesInit and particlesLoaded with the correct parameters", async () => {
    const mockParticlesInit = jest.fn();
    const mockParticlesLoaded = jest.fn();

    jest.mock("../Pages/Home/HomePage", () => ({
      __esModule: true,
      default: () => (
        <div particlesInit={mockParticlesInit} particlesLoaded={mockParticlesLoaded} />
      ),
    }));

    await act(async () => {
      shallow(<HomePage />);
    });

    expect(mockParticlesInit).toHaveBeenCalledWith(expect.any(Function));
    expect(mockParticlesLoaded).toHaveBeenCalledWith(expect.any(Function));
  });

  it("logs the engine when particlesInit is called", async () => {
    const mockConsoleLog = jest.spyOn(console, "log");
    mockConsoleLog.mockImplementation(() => {});

    const mockParticlesInit = jest.fn();
    const mockParticlesLoaded = jest.fn();

    jest.mock("../Pages/Home/HomePage", () => ({
      __esModule: true,
      default: () => (
        <div particlesInit={mockParticlesInit} particlesLoaded={mockParticlesLoaded} />
      ),
    }));

    await act(async () => {
      shallow(<HomePage />);
    });

    expect(mockConsoleLog).toHaveBeenCalledWith(expect.anything());
    mockConsoleLog.mockRestore();
  });

  it("logs the container when particlesLoaded is called", async () => {
    const mockConsoleLog = jest.spyOn(console, "log");
    mockConsoleLog.mockImplementation(() => {});

    const mockParticlesInit = jest.fn();
    const mockParticlesLoaded = jest.fn();

    jest.mock("../Pages/Home/HomePage", () => ({
      __esModule: true,
      default: () => (
        <div particlesInit={mockParticlesInit} particlesLoaded={mockParticlesLoaded} />
      ),
    }));

    await act(async () => {
      shallow(<HomePage />);
    });

    expect(mockConsoleLog).toHaveBeenCalledWith(expect.anything());
    mockConsoleLog.mockRestore();
  });
});

