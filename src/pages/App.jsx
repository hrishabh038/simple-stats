import React, { useState, useEffect } from "react";
import {Button} from "../components/components";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Simulate a 2-second network request

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const handleProcessingClick = () => {
    setIsLoading(true);
  };

  return (
    <div className="p-8 bg-neutral-50 min-h-screen font-sans">
      <h1 className="text-3xl font-bold mb-8 te">
        Custom Button Component
      </h1>

      {/* Solid Variant */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-neutral-700">
          Solid Variant
        </h2>
        <div className="flex items-center flex-wrap gap-4">
          <Button colorScheme="primary" variant="solid">
            Primary
          </Button>
          <Button colorScheme="secondary" variant="solid">
            Secondary
          </Button>
          <Button colorScheme="success" variant="solid">
            Success
          </Button>
          <Button colorScheme="warning" variant="solid">
            Warning
          </Button>
          <Button colorScheme="danger" variant="solid">
            Danger
          </Button>
          <Button colorScheme="error" variant="solid">
            Error
          </Button>
        </div>
      </div>

      {/* Outline Variant */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-neutral-700">
          Outline Variant
        </h2>
        <div className="flex items-center flex-wrap gap-4">
          <Button colorScheme="primary" variant="outline">
            Primary
          </Button>
          <Button colorScheme="secondary" variant="outline">
            Secondary
          </Button>
          <Button colorScheme="success" variant="outline">
            Success
          </Button>
          <Button colorScheme="warning" variant="outline">
            Warning
          </Button>
          <Button colorScheme="danger" variant="outline">
            Danger
          </Button>
          <Button colorScheme="error" variant="outline">
            Error
          </Button>
        </div>
      </div>

      {/* Ghost Variant */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-neutral-700">
          Ghost Variant
        </h2>
        <div className="flex items-center flex-wrap gap-4">
          <Button colorScheme="primary" variant="ghost">
            Primary
          </Button>
          <Button colorScheme="secondary" variant="ghost">
            Secondary
          </Button>
          <Button colorScheme="success" variant="ghost">
            Success
          </Button>
          <Button colorScheme="warning" variant="ghost">
            Warning
          </Button>
          <Button colorScheme="danger" variant="ghost">
            Danger
          </Button>
          <Button colorScheme="error" variant="ghost">
            Error
          </Button>
        </div>
      </div>

      {/* States */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-neutral-700">
          Button States
        </h2>
        <div className="flex items-center flex-wrap gap-4">
          <Button
            colorScheme="primary"
            isLoading={isLoading}
            onClick={handleProcessingClick}
          >
            Click to Process
          </Button>
          <Button colorScheme="warning" variant="solid" isLoading>
            Checking...
          </Button>
          <Button colorScheme="danger" isDisabled>
            Disabled Button
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
