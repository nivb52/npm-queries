const extractPackageInfo = data => {
    let name, version;
    if (typeof data === 'string') {
      [name, version] = data.split(' ');
    } else {
      name = data.name;
      version = data.version;
    }
    //modify for ajax
    name = name.trim();
    if (!version) {
      version = 'latest';
    } else {
      version = version.trim();
      const isSpecialSign = ver => {
          return ['@','~','\\^'].find( sign => ver.search(sign) > -1)
      }
      
      const startStrFrom = isSpecialSign(version) ?  1 : 0 // true in case there is sign
      version = version.substr(startStrFrom);
      // add 0 before '.' to make search easier
      if (version.substr(0, 1) === '.') {
        version = '0' + version;
      }
    }
  
    return [name, version];
  };
  
  export default extractPackageInfo
  