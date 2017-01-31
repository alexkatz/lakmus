"use strict";
var utils_1 = require("../src/utils");
var description = "utils spec.";
var funcs = [
    function (instance) { return instance.InstanceId; },
    function (instance) { return instance.InstanceId; },
    function (instance) { return instance.InstanceId; },
    function (instance) { return instance.InstanceId; },
    function (instance) { return instance.InstanceId; },
    function (instance) { return instance.InstanceId; },
    function (instance) { return instance.InstanceId; },
    function (instance) { return (instance.InstanceId); },
    function (instance) { return (instance.InstanceId); ; },
];
describe(description, function () {
    it("getMemberNameFromSelector should pass.", function () {
        funcs.forEach(function (func) { return expect(utils_1.getMemberNameFromSelector(func)).toBe("InstanceId"); });
    });
});
describe(description, function () {
    it("getMemberNameFromSelector should throw an error when function has no return statement.", function () {
        expect(function () { return utils_1.getMemberNameFromSelector(function () { 1 + 1; }); }).toThrow();
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWMvdXRpbHMuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0JBQTBDLGNBQWMsQ0FBQyxDQUFBO0FBRXpELElBQUksV0FBVyxHQUFHLGFBQWEsQ0FBQztBQUNoQyxJQUFJLEtBQUssR0FBRztJQUNSLFVBQVUsUUFBUSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNuRCxVQUFVLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDbkQsVUFBVSxRQUFRLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBRSxDQUFDO0lBQ3BELFVBQVUsUUFBUSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFBLENBQUEsQ0FBQztJQUNqRCxVQUFVLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQSxDQUFDLENBQUM7SUFDbEQsVUFBVSxRQUFRLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ25ELFVBQVMsUUFBUSxJQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFBLENBQUEsQ0FBQztJQUM5QyxVQUFTLFFBQVEsSUFBRSxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQSxDQUFDO0lBQ2pELFVBQVMsUUFBUSxJQUFFLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQSxDQUFDO0NBQ3JELENBQUE7QUFFRCxRQUFRLENBQUMsV0FBVyxFQUFFO0lBQ2xCLEVBQUUsQ0FBQyx3Q0FBd0MsRUFBRTtRQUN6QyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsTUFBTSxDQUFDLGlDQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUExRCxDQUEwRCxDQUFDLENBQUE7SUFDckYsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyxXQUFXLEVBQUU7SUFDbEIsRUFBRSxDQUFDLHdGQUF3RixFQUFFO1FBQ3pGLE1BQU0sQ0FBQyxjQUFNLE9BQUEsaUNBQXlCLENBQUMsY0FBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLEVBQTFDLENBQTBDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUN0RSxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InNwZWMvdXRpbHMuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldE1lbWJlck5hbWVGcm9tU2VsZWN0b3IgfSBmcm9tIFwiLi4vc3JjL3V0aWxzXCI7XHJcblxyXG52YXIgZGVzY3JpcHRpb24gPSBcInV0aWxzIHNwZWMuXCI7XHJcbnZhciBmdW5jcyA9IFtcclxuICAgIGZ1bmN0aW9uIChpbnN0YW5jZSkgeyByZXR1cm4gaW5zdGFuY2UuSW5zdGFuY2VJZDsgfSxcclxuICAgIGZ1bmN0aW9uIChpbnN0YW5jZSkgeyByZXR1cm4gaW5zdGFuY2UuSW5zdGFuY2VJZDsgfSxcclxuICAgIGZ1bmN0aW9uIChpbnN0YW5jZSkgeyByZXR1cm4gaW5zdGFuY2UuSW5zdGFuY2VJZDsgIH0sXHJcbiAgICBmdW5jdGlvbiAoaW5zdGFuY2UpIHsgcmV0dXJuIGluc3RhbmNlLkluc3RhbmNlSWR9LFxyXG4gICAgZnVuY3Rpb24gKGluc3RhbmNlKSB7IHJldHVybiBpbnN0YW5jZS5JbnN0YW5jZUlkIH0sXHJcbiAgICBmdW5jdGlvbiAoaW5zdGFuY2UpIHsgcmV0dXJuIGluc3RhbmNlLkluc3RhbmNlSWQ7IH0sXHJcbiAgICBmdW5jdGlvbihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlLkluc3RhbmNlSWR9LFxyXG4gICAgZnVuY3Rpb24oaW5zdGFuY2Upe3JldHVybiAoaW5zdGFuY2UuSW5zdGFuY2VJZCk7fSxcclxuICAgIGZ1bmN0aW9uKGluc3RhbmNlKXtyZXR1cm4gKGluc3RhbmNlLkluc3RhbmNlSWQpOzt9LFxyXG5dICAgXHJcblxyXG5kZXNjcmliZShkZXNjcmlwdGlvbiwgKCkgPT4ge1xyXG4gICAgaXQoXCJnZXRNZW1iZXJOYW1lRnJvbVNlbGVjdG9yIHNob3VsZCBwYXNzLlwiLCAoKSA9PiB7XHJcbiAgICAgICAgZnVuY3MuZm9yRWFjaChmdW5jID0+IGV4cGVjdChnZXRNZW1iZXJOYW1lRnJvbVNlbGVjdG9yKGZ1bmMpKS50b0JlKFwiSW5zdGFuY2VJZFwiKSlcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmRlc2NyaWJlKGRlc2NyaXB0aW9uLCAoKSA9PiB7XHJcbiAgICBpdChcImdldE1lbWJlck5hbWVGcm9tU2VsZWN0b3Igc2hvdWxkIHRocm93IGFuIGVycm9yIHdoZW4gZnVuY3Rpb24gaGFzIG5vIHJldHVybiBzdGF0ZW1lbnQuXCIsICgpID0+IHtcclxuICAgICAgICBleHBlY3QoKCkgPT4gZ2V0TWVtYmVyTmFtZUZyb21TZWxlY3RvcigoKSA9PiB7IDEgKyAxIH0pKS50b1Rocm93KClcclxuICAgIH0pO1xyXG59KTsiXX0=