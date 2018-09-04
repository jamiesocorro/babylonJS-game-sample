window.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById("render-canvas");
    var engine = new BABYLON.Engine(canvas,true);

    var createScene = function() {

        var scene = new BABYLON.Scene(engine);
        var camera = new BABYLON.FreeCamera("cam", new BABYLON.Vector3(0, 5, -5), scene);

        camera.setTarget(BABYLON.Vector3.Zero());

        var light = new BABYLON.HemisphericLight("Light", new BABYLON.Vector3(0, 1, 0), scene);
        light.intensity = .7;

        //creation of objects
        var pad1 = BABYLON.Mesh.CreateBox("cube1", 1.5, scene);
        pad1.position.x = -1;
        pad1.position.z = -.5;

        var pad2 = BABYLON.Mesh.CreateBox("cube2", 1.5, scene);
        pad2.position.x = 1;
        pad2.position.z = -.5;

        var pad3 = BABYLON.Mesh.CreateBox("cube2", 1.5, scene);
        pad3.position.z = 1.5;
        pad3.position.x = -1;

        var pad4 = BABYLON.Mesh.CreateBox("cube2", 1.5, scene);
        pad4.position.z = 1.5;
        pad4.position.x = 1;

        //adds colors or css like
        var material1 = new BABYLON.StandardMaterial("material1", scene);
        material1.diffuseColor = new BABYLON.Color3(1,0,0);

        var material2 = new BABYLON.StandardMaterial("material2", scene);
        material2.diffuseColor = new BABYLON.Color3(0,1,0);

        var material3 = new BABYLON.StandardMaterial("material3", scene);
        material3.diffuseColor = new BABYLON.Color3(0,0,1);

        var material4 = new BABYLON.StandardMaterial("material4", scene);
        material4.diffuseColor = new BABYLON.Color3(0,1,1);

        pad1.material = material1;
        pad2.material = material2;
        pad3.material = material3;
        pad4.material = material4;

        return scene;
    }

    var scene = createScene();
    var renderLoop = function () {
        scene.render();
    };
    engine.runRenderLoop(renderLoop);

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });
});